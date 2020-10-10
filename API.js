const ACCESS_TOKEN = '';
// À GENERER SUR : https://developers.google.com/oauthplayground/?code=4/1AEaAYrMkC_XbsQc6O5QYLpF_RSB_JAKazNJbArWVgjaUwozG5Y9t8_0GVMG0EdgtPK_YngFIs9Coj7InKXmR8U&scope=https://www.googleapis.com/auth/spreadsheets
// SELECTIONNER L'OPTION : "https://www.googleapis.com/auth/spreadsheets" DANS "Google Sheets API v4" ;


const SHEET_ID = '1F1R3fu69bgWIs5Mwr1hwobngkxJoaCWd85z4VRJsCDk';
//exemple : https://docs.google.com/spreadsheets/d/1F1R3fu69bgWIs5Mwr1hwobngkxJoaCWd85z4VRJsCDk/edit#gid=0

const SHEET_ID_USERS = '1DzCEkrgbAdrTZFdhI8ZdxhPU3Y1ToDjaLC3Oz7aw8wA';
//exemple : https://docs.google.com/spreadsheets/d/1DzCEkrgbAdrTZFdhI8ZdxhPU3Y1ToDjaLC3Oz7aw8wA/edit#gid=0

export const sendData = (data) => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //update this token with yours. 
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body : JSON.stringify({
            requests :[{
                appendCells : {
                    "sheetId": 0,
                    "rows": [
                        {
                          values : [
                              {
                                userEnteredValue: {
                                    "stringValue": data.student_code
                                }
                              },
                              {
                                userEnteredValue: {
                                    "stringValue": data.scan_time
                                }
                              },
                              {
                                userEnteredValue: {
                                    "stringValue": data.date
                                }
                              },
                              {
                                userEnteredValue: {
                                    "stringValue": data.mode
                                }
                              }
                          ]
                        }
                      ],
                    "fields": "*"
                }
            }]
        })
    })
    .then(response => response.json()).then( resp => console.log('response', JSON.stringify(resp)))
}

export const getData = () => {
    return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:Z1000`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            //update this token with yours. 
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        }
    })
}

export const addNewUser = (data) => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID_USERS}:batchUpdate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //update this token with yours. 
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body : JSON.stringify({
            requests :[{
                appendCells : {
                    "sheetId": 0,
                    "rows": [
                        {
                          values : [
                              {
                                userEnteredValue: {
                                    "stringValue": data.pinCode
                                }
                              },
                              {
                                userEnteredValue: {
                                    "stringValue": data.firstname
                                }
                              },
                              {
                                userEnteredValue: {
                                    "stringValue": data.lastname
                                }
                              },
                              {
                                userEnteredValue: {
                                    "stringValue": data.id
                                }
                              },
                              {
                                userEnteredValue: {
                                    "stringValue": data.referent
                                }
                              }
                          ]
                        }
                      ],
                    "fields": "*"
                }
            }]
        })
    })
    .then(response => response.json()).then( resp => console.log('response', JSON.stringify(resp)))
}
