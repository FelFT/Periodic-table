import menu
import get

while True:
	# Mostramos el menu
    menu.menu()
 
	# solicituamos una opción al usuario
    opcionMenu = input("inserta un numero valor >> ")
 
    if opcionMenu=="1":
        print("")
        input("Has pulsado la opción 1...\npulsa una tecla para continuar")
        while True:
            menu.mElement()
            element = input("Ingrese el símbolo que desea desplegar o ingrese q para salir>> ")
            if element =='q':
                break
            else:
                get.getElement(element)
        
    elif opcionMenu=="2":
        print ("")
        input("Has pulsado la opción 2...\npulsa una tecla para continuar")
        while True:
            menu.mGroup()
            group = input("Ingrese un grupo de la tabla periódica o ingrese q para salir >> ")
            if group == 'q':
                break
            else:
                get.getGroups(group)

    elif opcionMenu=="q":
    	break
    else:
    	print ("")
    	input("No has pulsado ninguna opción correcta...\npulsa una tecla para continuar")