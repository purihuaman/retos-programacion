"""
    Reto #1: EL "LENGUAJE HACKER"

    * Escribe un programa que reciba un texto y transforme lenguaje natural a
    * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
    *  se caracteriza por sustituir caracteres alfanuméricos.
    * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
    *   con el alfabeto y los números en "leet".
    *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")

"""


def transform_text(text):
    leets = {
        'A': '4',
        'B': 'I3',
        'C': '[',
        'D': ')',
        'E': '3',
        'F': '|=',
        'G': '&',
        'H': '#',
        'I': '1',
        'J': ',_|',
        'K': '>|',
        'L': '1',
        'M': '[V]',
        'N': '^/',
        'O': '0',
        'P': '|*',
        'Q': '(_,)',
        'R': '12',
        'S': '5',
        'T': '7',
        'U': '(_)',
        'V': '\/',
        'W': '\/\/',
        'X': '><',
        'Y': 'j',
        'Z': '2',
        '0': 'o',
        '1': 'L',
        '2': 'R',
        '3': 'E',
        '4': 'A',
        '5': 'S',
        '6': 'b',
        '7': 'T',
        '8': 'B',
        '9': 'g'
    }

    let_text = ""

    for word in text:
        if word.upper() in leets:
            let_text += leets[word.upper()]
        else:
            let_text += word.upper()

    return f"{let_text}"


print((transform_text("Hola mundo")))
print((transform_text("Python")))
print((transform_text("Python y JavaScript")))
