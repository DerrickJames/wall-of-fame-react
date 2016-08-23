export function checkHttpStatus(response) {
  //console.log('Response: ', response);

  return response;

  /**
  response.json().then(responseData => {
    console.log('PromiseData: ', responseData);
    console.log('ParentResponse: ', response);

    if(response.ok) {
      return response;
    } else {

      console.log('Message: ', responseData.message);
      //var error = new Error(response.statusText);

      //error.response = responseData;

      throw('Error!');
      //return Promise.reject(responseData.message);
    }

    return response;
  });*?

/**
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);

    error.response = response;

    throw error;
  }*/
}

export function parseJSON(response) {
  return response.json();
}


