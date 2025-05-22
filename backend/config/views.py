from django.shortcuts import render
from django.http import JsonResponse

def frontend_view(request):
    return render(request, 'index.html')

def api_status(request):
    return JsonResponse({'message': 'API is working!'})
