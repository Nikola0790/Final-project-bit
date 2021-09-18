const urlToken = "http://localhost:3333/login";
const urlCandidates = "http://localhost:3333/api/candidates";
const urlReports = "http://localhost:3333/api/reports";

// POST method for geting token
export const token = (email, pass) => {
  return fetch(urlToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: `${email}`, password: `${pass}` }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.accessToken;
    });
};

// GET method for list candidates
export const getCandidates = async function getMeth() {
  let saveToken = localStorage.getItem("nameToken");
  return await fetch(urlCandidates, {

    headers: {
      Authorization: `Bearer ${saveToken}`,
    },
  }).then((result) => {
    return result.json();
  });
};

// GET method for one candidate
export const getCandidate = async function getMeth(id) {
  let saveToken = localStorage.getItem("nameToken");
  return await fetch(`${urlCandidates}/${id}`, {
  
    headers: {
      Authorization: `Bearer ${saveToken}`,
    },
  }).then((result) => {
    return result.json();
  });
};

// GET method for table reports
export const getReport = async function getMeth() {
  let saveToken = localStorage.getItem("nameToken");
  return await fetch(`${urlReports}`, {
   
    headers: {
      Authorization: `Bearer ${saveToken}`,
    },
  }).then((result) => {
    return result.json();
  });
};
