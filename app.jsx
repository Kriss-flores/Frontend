import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const iniciarSesion = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h1 className="text-center text-primary mb-4">
          HelpDesk
        </h1>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Usuario"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
        />

        <button
          className="btn btn-primary w-100"
          onClick={iniciarSesion}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">

        <div
          className="col-md-3 bg-primary text-white p-4"
          style={{ minHeight: "100vh" }}
        >
          <h2 className="text-center mb-4">
            HelpDesk
          </h2>

          <div className="d-grid gap-3">

            <Link
              className="btn btn-light"
              to="/createticket"
            >
              🎫 Crear Ticket
            </Link>

            <Link
              className="btn btn-light"
              to="/assigntechnician"
            >
              👨‍💻 Asignar Técnico
            </Link>

            <Link
              className="btn btn-light"
              to="/ticketstatus"
            >
              📋 Estado Tickets
            </Link>

            <Link
              className="btn btn-light"
              to="/reports"
            >
              📊 Reportes
            </Link>

            <Link
              className="btn btn-danger"
              to="/"
            >
              Cerrar Sesión
            </Link>

          </div>
        </div>

        <div className="col-md-9 p-5">

          <h1 className="mb-4">
            Panel de Control
          </h1>

          <div className="row">

            <div className="col-md-4 mb-3">
              <div className="card bg-primary text-white shadow">
                <div className="card-body text-center">
                  <h2>0</h2>
                  <p>Total Tickets</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card bg-success text-white shadow">
                <div className="card-body text-center">
                  <h2>0</h2>
                  <p>Resueltos</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card bg-warning shadow">
                <div className="card-body text-center">
                  <h2>0</h2>
                  <p>Pendientes</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

function CreateTicket() {
  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>Crear Ticket</h2>

        <input
          className="form-control mb-3"
          placeholder="Título"
        />

        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Descripción"
        />

        <button className="btn btn-success">
          Guardar Ticket
        </button>

        <Link
          className="btn btn-secondary mt-3"
          to="/dashboard"
        >
          Volver
        </Link>

      </div>

    </div>
  );
}

function AssignTechnician() {
  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>Asignar Técnico</h2>

        <select className="form-select mb-3">
          <option>Ticket #1</option>
          <option>Ticket #2</option>
        </select>

        <select className="form-select mb-3">
          <option>Técnico Juan</option>
          <option>Técnico María</option>
        </select>

        <button className="btn btn-primary">
          Asignar
        </button>

        <Link
          className="btn btn-secondary mt-3"
          to="/dashboard"
        >
          Volver
        </Link>

      </div>

    </div>
  );
}

function TicketStatus() {
  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>Estado de Tickets</h2>

        <table className="table table-striped">

          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Error impresora</td>
              <td>Abierto</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Problema Red</td>
              <td>Asignado</td>
            </tr>
          </tbody>

        </table>

        <Link
          className="btn btn-secondary"
          to="/dashboard"
        >
          Volver
        </Link>

      </div>

    </div>
  );
}

function Reports() {
  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>Reportes</h2>

        <div className="alert alert-primary">
          Total Tickets: 0
        </div>

        <div className="alert alert-success">
          Tickets Resueltos: 0
        </div>

        <div className="alert alert-warning">
          Tickets Pendientes: 0
        </div>

        <Link
          className="btn btn-secondary"
          to="/dashboard"
        >
          Volver
        </Link>

      </div>

    </div>
  );
}

function MisTickets() {
  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>Mis Tickets</h2>

        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Problema</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>No imprime</td>
              <td>Pendiente</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createticket" element={<CreateTicket />} />
        <Route path="/assigntechnician" element={<AssignTechnician />} />
        <Route path="/ticketstatus" element={<TicketStatus />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/mistickets" element={<MisTickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
