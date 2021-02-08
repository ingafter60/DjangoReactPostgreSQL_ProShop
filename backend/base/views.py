# base/views.py
from django.shortcuts import render
from django.http import JsonResponse

def getRoutes(request):
    return JsonResponse('Hello World!', safe=False)

