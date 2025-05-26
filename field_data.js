const db = firebase.database();

//TEMPERATURE
const typeJBox = document.getElementById('typeJ-value');
const typeKBox = document.getElementById('typeK-value');
const rtd2Box = document.getElementById('rtd2-value');
const rtd3Box = document.getElementById('rtd3-value');

// Read Type J value
db.ref('sensordata/typeJ').on('value', (snapshot) => {
  const value = snapshot.val();
  typeJBox.textContent = value !== null ? value : "N/A";
});

// Read Type K value
db.ref('sensordata/typeK').on('value', (snapshot) => {
    const value = snapshot.val();
    typeKBox.textContent = value !== null ? value : "N/A";
  });

// Read RTD 2 value
db.ref('sensordata/rtd2').on('value', (snapshot) => {
    const value = snapshot.val();
    rtd2Box.textContent = value !== null ? value : "N/A";
  });

// Read RTD 3 value
db.ref('sensordata/rtd3').on('value', (snapshot) => {
    const value = snapshot.val();
    rtd3Box.textContent = value !== null ? value : "N/A";
  });
  

//PRESSURE
const bourbonBox = document.getElementById('bourbon-value');
const differentialBox = document.getElementById('differential-value');
const guageBox = document.getElementById('guage-value');
const acrylicBox = document.getElementById('acrylic-pressure');

// Read Bourbon value
db.ref('sensordata/orifice_psi').on('value', (snapshot) => {
  const value = snapshot.val();
  bourbonBox.textContent = value !== null ? value : "N/A";
});

// Read Differential value
db.ref('sensordata/venturi_psi').on('value', (snapshot) => {
    const value = snapshot.val();
    differentialBox.textContent = value !== null ? value : "N/A";
  });

  // Read Guage value
db.ref('sensordata/nozzle_psi').on('value', (snapshot) => {
    const value = snapshot.val();
    guageBox.textContent = value !== null ? value : "N/A";
  });

    // Acrylic Tank
db.ref('sensordata/acrylic_psi').on('value', (snapshot) => {
    const value = snapshot.val();
    acrylicBox.textContent = value !== null ? value : "N/A";
  });


//LEVEL
const capacitanceBox = document.getElementById('capacitance-value');
const reservoirBox = document.getElementById('reservoir-value');

// Read Capacitance Sensor value
db.ref('sensordata/capacitance').on('value', (snapshot) => {
    const value = snapshot.val();
    capacitanceBox.textContent = value !== null ? value : "N/A";
  });

// Read Reservoir Sensor value
db.ref('sensordata/reservoir_level').on('value', (snapshot) => {
    const value = snapshot.val();
    reservoirBox.textContent = value !== null ? value : "N/A";
  });
  

//FLOW
const flowBox = document.getElementById('flow-nozzle-value');
const orificeBox = document.getElementById('orifice-value');
const venturiBox = document.getElementById('venturi-value');

// Read Flow Nozzle value
db.ref('sensordata/nozzle_flow').on('value', (snapshot) => {
  const value = snapshot.val();
  flowBox.textContent = value !== null ? value : "N/A";
});

// Read Orifice Plate value
db.ref('sensordata/orifice_flow').on('value', (snapshot) => {
  const value = snapshot.val();
  orificeBox.textContent = value !== null ? value : "N/A";
});

// Read Venturi Tube value
db.ref('sensordata/venturi_flow').on('value', (snapshot) => {
  const value = snapshot.val();
  venturiBox.textContent = value !== null ? value : "N/A";
});




