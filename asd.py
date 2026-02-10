lista = list(range(1, 106))

for i in lista:
    if i % 3 == 0 and i % 5 == 0 and i % 7 == 0:
        print("FizzBuzzPop")
    elif i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0 and i % 7 == 0:
        print("FizzPop")
    elif i % 5 == 0 and i % 7 == 0:
        print("BuzzPop")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 ==0:
        print("Buzz")
    elif i % 7 == 0:
        print("Pop")
    else:
        print(i)
        
