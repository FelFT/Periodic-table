from dictionary import dictionary
import os
def getElement(e):
    dict = dictionary()
    lista = list(dict[e])
    if lista == None:
        input("Simbolo no encontrado. Por favor seleccione uno adecuado")
    elif lista == "q":
        input("Presione una tecla para continuar")
    else: 
        os.system('cls')
        print('\n\tNumero atomico: {}\
              \n\tNombre: {}\n\tPeso atomico: {}\n\tPunto de fusion: {}°C\
             \n\tPunto de ebullicion: {}°C\n\tFase a temperatura y presion estandar: {}\
            \n\tConfiguracion electronica: {}\n\tEstados de oxidacion comunes: {}\
             \n\tNumero de electrones de valencia: {}'.format(
            lista[8], lista[0], lista[1], lista[2], lista[3], lista[4], 
            lista[5], lista[6], lista[7]))
        input("Presione una tecla para continuar")
