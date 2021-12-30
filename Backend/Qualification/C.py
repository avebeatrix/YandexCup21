# C. Шашки

reader = open('input.txt', 'r')

N, M = reader.readline().strip().split(' ')
N = int(N)
M = int(M)
white = []
black = []
for i in range(1, N+3):
    white.append([])
    black.append([])
    for j in range(1, M+3):
        white[i-1].append(False)
        black[i-1].append(False)

count_white = int(reader.readline().strip())
for i in range(0, count_white):
    x, y = reader.readline().strip().split(' ')
    x = int(x)
    y = int(y)   
    white[x][y] = True

count_black = int(reader.readline().strip())
for i in range(0, count_black):
    x, y = reader.readline().strip().split(' ')
    x = int(x)
    y = int(y)   
    black[x][y] = True

result = 'No'
first = reader.readline().strip()

need_break = False
for i in range(0, N+2):        
    for j in range(0, M+2):
        if first=='white':
            if white[i][j]==True:
                if black[i-1][j-1]==True and (i-2>0 and j-2>0 and black[i-2][j-2]==False and white[i-2][j-2]==False):
                    result = 'Yes'
                    need_break = True
                    break
                if black[i+1][j+1]==True and (i<N-1 and j<M-1 and black[i+2][j+2]==False and white[i+2][j+2]==False):
                    result = 'Yes'
                    need_break = True
                    break
                if black[i-1][j+1]==True and (i-2>0 and j<M-1 and black[i-2][j+2]==False and white[i-2][j+2]==False ):
                    result = 'Yes'
                    need_break = True
                    break
                if black[i+1][j-1]==True and (i<N-1 and j-2>0 and black[i+2][j-2]==False and white[i+2][j-2]==False):
                    result = 'Yes'
                    need_break = True
                    break
        else:
            if black[i][j]==True:
                if white[i-1][j-1]==True and (i-2>0 and j-2>0 and white[i-2][j-2]==False and black[i-2][j-2]==False):
                    result = 'Yes'
                    need_break = True
                    break
                if white[i+1][j+1]==True and (i<N-1 and j<M-1 and white[i+2][j+2]==False and black[i+2][j+2]==False):
                    result = 'Yes'
                    need_break = True
                    break
                if white[i-1][j+1]==True and (i-2>0 and j<M-1 and white[i-2][j+2]==False and black[i-2][j+2]==False ):
                    result = 'Yes'
                    need_break = True
                    break
                if white[i+1][j-1]==True and (i<N-1 and j-2>0 and white[i+2][j-2]==False and black[i+2][j-2]==False):
                    result = 'Yes'
                    need_break = True
                    break
    if need_break:
        break
       
writer = open('output.txt', 'w')
writer.write(result)
writer.close()