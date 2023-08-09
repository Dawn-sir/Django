from django.http import HttpResponse

def index(request):
    line1 = '<h1 style="text-align: center">Hello, zmy</h1>'
    line4 = '<a href="/play/">进入游戏界面</a>'
    line3 = '<hr></hr>'
    line2 = '<img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.WyiAY5H9gzSDcW500G4xPQHaFj?w=201&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7">'
    return HttpResponse(line1 + line4 + line3 + line2)

def play(request):
    line1 = '<h1 style="text-align: center">游戏界面</h1>'
    line3 = '<a href="/">返回主页</a>'
    line4 = '<hr></hr>'
    line2 = '<img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.kciOxtRyQe6ddLYRd2YC-wHaFP?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7">'
    return HttpResponse(line1 + line3 + line4 + line2)
