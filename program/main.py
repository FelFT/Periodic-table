import menu
import mElement
import get

while True:
	# Mostramos el menu
    menu.menu()
 
	# solicituamos una opción al usuario
    opcionMenu = input("inserta un numero valor >> ")
 
    if opcionMenu=="1":
        print("")
        input("Has pulsado la opción 1...\pulsa una tecla para continuar")
        menu.mElement()
        element = input("Ingrese el símbolo que desea desplegar o ingrese q para salir>> ")
        get.getElement(element)
        
    elif opcionMenu=="2":
        print ("")
        input("Has pulsado la opción 2...\npulsa una tecla para continuar")
        menu.mGroup()
        group()

    elif opcionMenu=="q":
    	break
    else:
    	print ("")
    	input("No has pulsado ninguna opción correcta...\npulsa una tecla para continuar")