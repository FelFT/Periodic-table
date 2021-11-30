import dictionary 
import os

def getElement(e):
    os.system('cls')
    try:
        dicE = dictionary.elements()
        lista = list(dicE[e])
        print('\n\tNumero atomico: {}\
              \n\tNombre: {}\n\tPeso atomico: {}\n\tPunto de fusion: {}°C\
             \n\tPunto de ebullicion: {}°C\n\tFase a temperatura y presion estandar: {}\
            \n\tConfiguracion electronica: {}\n\tEstados de oxidacion comunes: {}\
             \n\tNumero de electrones de valencia: {}'.format(
            lista[8], lista[0], lista[1], lista[2], lista[3], lista[4], 
            lista[5], lista[6], lista[7]))
        input("Presione una tecla para continuar")
    except:
        input("Simbolo no encontrado. Por favor seleccione uno adecuado")

    
def getGroups(g):
    os.system('cls')
    try:
        dicG = dictionary.groups()
        dicE = dictionary.elements() 
        lista = list(dicG[g])
        print('Grupo {}\
                  \n\tNo. atómico \tSímbolo \tNombre'.format(g));
        for element in lista:
            listaE = list(dicE[element])
            print('\t\t{}\t{}\t\t{}'.format(
                      listaE[8], element, listaE[0] ))
        input("Presione una tecla para continuar")
    except:
        input("Grupo no encontrado. Por favor seleccione uno adecuado")

