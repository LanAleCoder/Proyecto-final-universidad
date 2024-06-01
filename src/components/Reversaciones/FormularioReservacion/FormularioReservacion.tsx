import "./formulario.css";

const FormularioReservacion = () => {
  return (
    <section className="section">
      <h2>Reservar</h2>
      <form action="" id="form-contact">
        <div className="form-group-input">
          <label htmlFor="name">Nombre:</label>
          <input placeholder="Nombre" type="text" id="name" name="name" />
        </div>
        <div className="form-group-input">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@email.com"
          />
        </div>
        <div className="form-group-input">
          <label htmlFor="numberOfPeople">Personas:</label>
          <select name="numberOfPeople" id="">
            <option value="0" selected>
              Seleccione el tamaño de la mesa
            </option>
            <option value="1">1 persona</option>
            <option value="2">2 personas</option>
            <option value="3">3 personas</option>
            <option value="4">4 personas</option>
            <option value="5">5 personas</option>
            <option value="6">Más de 5 personas</option>
          </select>
        </div>
        <button
          className="inicio__descripcion-boton inicio__contacto-titulo-boton"
          type="submit"
        >
          Contactar
        </button>
      </form>
    </section>
  );
};

export default FormularioReservacion;
