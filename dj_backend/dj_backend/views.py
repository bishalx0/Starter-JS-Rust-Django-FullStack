from django.http import JsonResponse

def hello(request):
    return JsonResponse({"msg":"Django: Hello World"})
