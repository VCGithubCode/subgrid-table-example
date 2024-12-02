import './App.css';

function App() {
  const data = [
    {
      name: 'John Doe',
      age: 30,
      email: 'john.doe@mail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Jane Doe',
      age: 25,
      email: 'jane.doe@mail.com',
      phone: '123-456-7890',
    },
    {
      name: 'John Smith',
      age: 35,
      email: 'john.smith@mail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Jane Smith',
      age: 28,
      email: 'jane.smith@mail.com',
      phone: '123-456-7890',
    },
  ];

  return (
    <>
      <h1>subgrid Table</h1>

      <div className="table-wrapper">
        <div className="table-header">
          <div className="table-cell">Name</div>
          <div className="table-cell">Age</div>
          <div className="table-cell">Email</div>
          <div className="table-cell">Phone</div>
        </div>
        <div className="table-body">
          {data.map((item, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">{item.name}</div>
              <div className="table-cell">{item.age}</div>
              <div className="table-cell">{item.email}</div>
              <div className="table-cell">{item.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
