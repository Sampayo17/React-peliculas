//import { toBeEmptyDOMElement } from '@testing-library/jest-dom/matchers';
import * as Yup from 'yup'

export default function configurarValidaciones() {
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula', function () {
        return this.test('primera-letra-mayuscula', 'La primera letra debe ser mayúscula',
            function (valor) {
                if (valor && valor.length > 0) {
                    const primeraLetra = valor.substring(0, 1);
                    return primeraLetra === primeraLetra.toUpperCase()
                }

                return true;
            })
    })

    Yup.addMethod(Yup.string, 'stringEmpty', function () {
        return this.test('string-empty', 'El campo esta vacio',
            function (valor) {
                if (valor === " ") {

                    console.log("valor" + valor);
                    return false;
                    
                }

                return true;
            }
        )
    })

    //para proximas validaciones personales
}