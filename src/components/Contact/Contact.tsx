import { useFormik } from 'formik'; // Importa la biblioteca formik para el manejo de formularios.
import Swal from 'sweetalert2'; // Importa sweetalert2 para mostrar alertas agradables.
import * as yup from 'yup'; // Importa yup para la validación del esquema del formulario.

const Contact = () => {

    // Función que se llama al enviar el formulario.
    const handleSubmit = (values: object, formikHelpers: any): void => {
        console.log(values); // Muestra los valores del formulario en la consola.
        formikHelpers.resetForm(); // Reinicia el formulario después del envío.
        Swal.fire({
            title: "Mensaje enviado con éxito", // Muestra una alerta de éxito.
            icon: "success"
        });
    }

    // Define el esquema de validación para el formulario.
    const validationSchema: object = yup.object({
        name: yup.string().max(12, "Introduce un nombre válido").required("El campo es requerido"),
        lastName: yup.string().max(12, "Introduce un apellido válido").required("El campo es requerido"),
        email: yup.string().max(40, "Introduce un nombre válido").required("El campo es requerido").email("Introduce un email válido"),
        phone: yup.string().max(10, "Introduce un número de teléfono válido").min(10, "Introduce un número de teléfono válido").required("El campo es requerido"),
        message: yup.string().max(250, "Máximo 250 caracteres").required("El campo es requerido"),
    });

    // Define los valores iniciales del formulario.
    const initialValues = {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    // Configura Formik con los valores iniciales, el esquema de validación y la función de envío.
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, formikHelpers: any) => handleSubmit(values, formikHelpers)
    });

    // Función para validar si el valor contiene solo números.
    const validateRegexNumber = (value: string) => /^\d+$/.test(value) || value.length === 0;

    // Función para validar la longitud del valor.
    const validateNumberLength = (value: string, length: number) => value.length <= length;

    // Función para validar si el valor contiene solo letras y espacios.
    const validateRegexAlpha = (value: string) => /^[A-Za-z\s]+$/.test(value) || value.length === 0;

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3 className='text-center mt-2 mb-4 text-salmon'>Ponte en contacto con nosotros</h3>
            <div className="row">
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label htmlFor="name" className="text-salmon form-label mb-1">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder='Juan' onChange={(e) => {
                            if (validateNumberLength(e.target.name, 12) && validateRegexAlpha(e.target.name)) {
                                formik.handleChange(e)
                            }
                        }} value={formik.values.name} />
                        {formik.touched.name && formik.errors.name ? (<div className="form-text text-danger">{formik.errors.name}</div>) : null}
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label htmlFor="lastName" className="text-salmon form-label mb-1">Apellido</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder='Perez' onChange={(e) => {
                            if (validateNumberLength(e.target.value, 12) && validateRegexAlpha(e.target.value)) {
                                formik.handleChange(e)
                            }
                        }} value={formik.values.lastName} />
                        {formik.touched.lastName && formik.errors.lastName ? (<div className="form-text text-danger">{formik.errors.lastName}</div>) : null}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label htmlFor="email" className="text-salmon form-label mb-1">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder='Juan@Perez.com' onChange={(e) => {
                            if (validateNumberLength(e.target.value, 40)) {
                                formik.handleChange(e)
                            }
                        }} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? (<div className="form-text text-danger">{formik.errors.email}</div>) : null}
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label htmlFor="phone" className="text-salmon form-label mb-1">Teléfono</label>
                        <input type="text" className="form-control" id="phone" name="phone" placeholder='5511112222' onChange={(e) => {
                            if (validateNumberLength(e.target.value, 10) && validateRegexNumber(e.target.value)) {
                                formik.handleChange(e)
                            }
                        }} value={formik.values.phone} />
                        {formik.touched.phone && formik.errors.phone ? (<div className="form-text text-danger">{formik.errors.phone}</div>) : null}
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="message" className="text-salmon form-label">Mensaje</label>
                    <textarea className="form-control" id="message" name="message" onChange={(e) => {
                        if (validateNumberLength(e.target.value, 250)) {
                            formik.handleChange(e)
                        }
                    }} value={formik.values.message}></textarea>
                </div>
            </div>
            <div className="row mt-3">
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-custom-primary">Enviar</button>
                </div>
            </div>
        </form>
    )
}

export default Contact // Exporta el componente Contact.