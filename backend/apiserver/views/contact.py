# backend/views.py
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from apiserver.db.models import ContactMessage
import json
import uuid

@method_decorator(csrf_exempt, name='dispatch')
class ContactFormEndpoint(View):
    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body)
            
            print(data)
            
            # Validate required fields
            required_fields = ['name', 'email', 'subject', 'message']
            if not all(field in data for field in required_fields):
                return JsonResponse(
                    {'status': 'error', 'message': 'All fields are required'}, 
                    status=400
                )
            
            # Generate ticket number
            ticket_number = f"GROWE-{uuid.uuid4().hex[:8].upper()}"
            
            # Save to database
            contact_message = ContactMessage(
                name=data.get('name'),
                email=data.get('email'),
                subject=data.get('subject'),
                message=data.get('message'),
                ticket_number=ticket_number  # You'll need to add this field to your model
            )
            
            print(contact_message)
            contact_message.save()
            
            # Send notification to admin
            self.send_notification_email(data, ticket_number)
            
            # Send confirmation to user
            self.send_confirmation_email(data, ticket_number)
            
            return JsonResponse(
                {'status': 'success', 'message': 'Message sent successfully!'}
            )
            
        except json.JSONDecodeError:
            return JsonResponse(
                {'status': 'error', 'message': 'Invalid JSON format'}, 
                status=400
            )
        except Exception as e:
            return JsonResponse(
                {'status': 'error', 'message': str(e)}, 
                status=500
            )

    def send_confirmation_email(self, data, ticket_number):
        """Send confirmation email to the user"""
        from django.template.loader import render_to_string
        from django.utils.html import strip_tags
        from django.core.mail import EmailMultiAlternatives
        
        user_name = data.get('name', '').split()[0]  # Get the first name
        subject = f"Your ticket #{ticket_number} has been opened"
        
        # Context for the email template
        context = {
            'name': user_name,
            'ticket_number': ticket_number,
            'subject': data.get('subject'),
            'priority': 'Alto',
            'status': 'Aperto'
        }
        
        # Render HTML content
        html_content = render_to_string('ticket_confirmation.html', context)
        text_content = strip_tags(html_content)  # Plain text version
        
        # Create email
        email = EmailMultiAlternatives(
            subject,
            text_content,
            'shadowsleuth569@gmail.com',  # From email
            [data.get('email')],  # To user's email
        )
        
        email.attach_alternative(html_content, "text/html")
        email.send(fail_silently=False)
    
    def send_notification_email(self, data, ticket_number):
        """Helper method to send notification email"""
        send_mail(
            f"New Contact Form Submission: {data.get('subject')}",
            self.format_email_message(data, ticket_number),
            'shadowsleuth569@gmail.com',  # From email
            ['shadowsleuth569@gmail.com'],  # To email
            fail_silently=False,
        )
    
    def format_email_message(self, data, ticket_number):
        """Helper method to format the email message"""
        return f"""
        Name: {data.get('name')}
        Email: {data.get('email')}
        Subject: {data.get('subject')}
        Message: {data.get('message')}
        Ticket: {ticket_number}
        """
    
    def get(self, request, *args, **kwargs):
        return JsonResponse(
            {'status': 'error', 'message': 'Invalid request method'}, 
            status=400
        )