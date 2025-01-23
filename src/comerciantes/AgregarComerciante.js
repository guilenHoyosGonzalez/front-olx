import React from "react";

function AgregarComerciante() {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="RazonSocial" class="form-label">
            Razon Social
          </label>
          <input type="text" class="form-control" id="RazonSocial" />
        </div>

        <div class="mb-3">
          <label for="Departamento" class="form-label">
            Departamento
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected> </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="Municipio" class="form-label">
            Municipio
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="RazonSocial" class="form-label">
            Telefono
          </label>
          <input type="tel" class="form-control" id="RazonSocial" />
        </div>

        <div class="mb-3">
          <label for="RazonSocial" class="form-label">
            Correo Electrónico
          </label>
          <input type="text" class="form-control" id="RazonSocial" />
        </div>

        <div class="mb-3">
          <label for="RazonSocial" class="form-label">
            Fecha Registro
          </label>
          <input type="dateTime" class="form-control" id="RazonSocial" />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Posee establecimiento
          </label>
        </div>

        <button type="submit" class="btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default AgregarComerciante;
