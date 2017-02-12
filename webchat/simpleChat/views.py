# from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    # template = loader.get_template('simpleChat/index.html')
    return render(request, 'index.html')
    # return HttpResponse(template.render(request))


# def index(request):
#     latest_question_list = Question.objects.order_by('-pub_date')[:5]
#     template = loader.get_template('polls/index.html')
#     context = {
#         'latest_question_list': latest_question_list,
#     }
#     return HttpResponse(template.render(context, request))
