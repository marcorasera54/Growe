from django.http import JsonResponse
from django.views import View
import json
from apiserver.db.models import JoinListEntry
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags

@method_decorator(csrf_exempt, name='dispatch')
class JoinListEndpoint(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            email = data.get('email')
            name = data.get('name', '')  # Optional name field
            
            if not email:
                return JsonResponse({'success': False, 'error': 'Email is required'}, status=400)
                
            # Check if email already exists
            if JoinListEntry.objects.filter(email=email).exists():
                return JsonResponse({'success': False, 'error': 'Email già registrata'}, status=400)
                
            # Create new entry
            entry = JoinListEntry(email=email)
            entry.save()
            
            # Send HTML confirmation email
            self.send_waitlist_confirmation(email, name)
            
            return JsonResponse({
                'success': True, 
                'message': 'Iscrizione completata con successo! Abbiamo inviato una conferma alla tua email.'
            })
            
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)
    
    
    def send_waitlist_confirmation(self, email, name):
        """Send a styled HTML waitlist confirmation email."""
        # Context variables for the template
        context = {
            'name': name if name else '',  # Default if no name provided
        }
        
        # Render the HTML email template
        html_message = render_to_string('joinlist_confirmation.html', context)
        plain_message = strip_tags(html_message)  # Create plain text version
        
        subject = "Benvenuto nella lista d'attesa di Growe!"
        
        send_mail(
            subject=subject,
            message=plain_message,  # Plain text fallback
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            html_message=html_message,  # HTML version
            fail_silently=False,
        )