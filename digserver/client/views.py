from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
@login_required(login_url='/login/')
def home(request, template_name='index.html'):
  return render_to_response(template_name,
                            context_instance=RequestContext(request))

def login(request, template_name='login.html'):
  return render_to_response(template_name,
                            context_instance=RequestContext(request))
