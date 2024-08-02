import { useFormik } from 'formik'; // Importa la biblioteca formik para el manejo de formularios.
import Swal from 'sweetalert2'; // Importa sweetalert2 para mostrar alertas agradables.
import * as yup from 'yup'; // Importa yup para la validación del esquema del formulario.
import Card from '../Card/Card'; // Importa el componente Card.
import { v4 as uuid } from 'uuid'; // Importa uuid para generar identificadores únicos.
import { useContext } from 'react'; // Importa useContext para utilizar contextos de React.
import { cardsContext } from '../../context/CardsContext'; // Importa el contexto de las tarjetas.
import { CardInterface } from '../../interfaces/Interfaces'; // Importa la interfaz de tarjeta.

const AddCard = () => {

    const context = useContext(cardsContext); // Usa el contexto de tarjetas.

    const handleSubmit = (values: CardInterface, formikHelpers: any): void => {
        // Maneja el envío del formulario.
        const newCard = { ...values, id: uuid() }; // Crea una nueva tarjeta con un ID único.
        formikHelpers.resetForm(); // Resetea el formulario.
        context?.dispatch({ type: 'ADD_CARD', payload: newCard }); // Despacha la acción para agregar la tarjeta.
        formikHelpers.setFieldValue('logo', 'empty'); // Resetea el campo 'logo' del formulario.
        Swal.fire({
            title: "Tarjeta guardada con éxito",
            icon: "success"
        }); // Muestra una alerta de éxito.
    };

    const validationSchema: object = yup.object({
        // Define el esquema de validación del formulario.
        cardNumber: yup.string()
            .max(16, "Número de tarjeta incorrecto")
            .min(16, "Número de tarjeta incorrecto")
            .required("El campo es requerido"),
        dueDate: yup.string()
            .min(5, "Fecha de vencimiento incorrecta")
            .required("El campo es requerido")
            .max(5, "Fecha de vencimiento incorrecta")
            .matches(new RegExp('^(0[1-9]|1[012])[/.](2[3-9]|[3-9][0-9])$'), "Fecha de vencimiento incorrecta"),
        owner: yup.string()
            .max(30, "Introduce un nombre válido")
            .required("El campo es requerido"),
        logo: yup.string()
            .oneOf(['amex', 'mastercard', 'visa'])
            .required("El campo es requerido")
    });

    const initialValues = {
        // Define los valores iniciales del formulario.
        cardNumber: '',
        dueDate: '',
        owner: '',
        logo: 'empty'
    };

    const formik = useFormik({
        // Configura formik con los valores iniciales, el esquema de validación y el manejador de envío.
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, formikHelpers: any) => handleSubmit(values, formikHelpers)
    });

    const validateRegexNumber = (value: string) => /^\d+$/.test(value) || value.length === 0; // Valida que el valor contenga solo dígitos o esté vacío.
    const validateNumberLength = (value: string, length: number) => value.length <= length; // Valida que la longitud del valor no exceda el límite.
    const validateRegexDate = (value: string) => !(/[a-z]+/gi.test(value)) || value.length === 0; // Valida que el valor no contenga letras.
    const validateRegexAlpha = (value: string) => /^[A-Za-z\s]+$/.test(value) || value.length === 0; // Valida que el valor contenga solo letras y espacios.

    return (
        <form className='FormGeneral' onSubmit={formik.handleSubmit}>
            <h3 className='text-center mt-2 mb-4 text-salmon'>Agrega una nueva tarjeta</h3>
            <div className="d-flex justify-content-center my-4">
                <Card cardNumber={formik.values.cardNumber} dueDate={formik.values.dueDate} owner={formik.values.owner} logo={formik.values.logo} />
            </div>
            <div className="row">
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label htmlFor="cardNumber" className="form-label mb-1 text-salmon" >Número de tarjeta</label>
                        <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="A 16 dígitos" onChange={(e) => {
                            if (validateNumberLength(e.target.value, 16) && validateRegexNumber(e.target.value)) {
                                formik.handleChange(e)
                            }
                        }} value={formik.values.cardNumber} />
                        {formik.touched.cardNumber && formik.errors.cardNumber ? (<div className="form-text text-danger">{formik.errors.cardNumber}</div>) : null}
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label htmlFor="dueDate" className="form-label mb-1 text-salmon">Fecha de vencimiento</label>
                        <input type="text" className="form-control" id="dueDate" name="dueDate" placeholder="MM/YY" onChange={(e) => {
                            if (validateNumberLength(e.target.value, 5) && validateRegexDate(e.target.value)) {
                                formik.handleChange(e)
                            }
                        }} value={formik.values.dueDate} />
                        {formik.touched.dueDate && formik.errors.dueDate ? (<div className="form-text text-danger">{formik.errors.dueDate}</div>) : null}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label htmlFor="owner" className="form-label mb-1 text-salmon">Nombre del titular</label>
                        <input type="text" className="form-control" id="owner" name="owner" placeholder='Juan Perez' onChange={(e) => {
                            if (validateNumberLength(e.target.value, 30) && validateRegexAlpha(e.target.value)) {
                                formik.handleChange(e)
                            }
                        }} value={formik.values.owner} />
                        {formik.touched.owner && formik.errors.owner ? (<div className="form-text text-danger">{formik.errors.owner}</div>) : null}
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <label htmlFor="logo" className="form-label mb-1 text-salmon">Tipo de tarjeta</label>
                    <select className="form-select mb-3" name="logo" onChange={formik.handleChange} value={formik.values.logo}>
                        <option value="empty" disabled>Seleccione una opción</option>
                        <option value="amex">Amex</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="visa">Visa</option>
                    </select>
                    {formik.touched.logo && formik.errors.logo ? (<div className="form-text text-danger">{formik.errors.logo}</div>) : null}
                </div>
            </div>
            <div className="row mt-3">
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-custom-primary">Guardar</button>
                </div>
            </div>
        </form>
    )
}

export default AddCard // Exporta el componente AddCard