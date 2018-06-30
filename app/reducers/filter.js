import { FILTER } from '../constants.js';

const initialState = [];

export default function (state = initialState, action) {

  switch (action.type) {
    case FILTER:

      var word = action.payload.word.toLowerCase();
      
      var first_name = [];
      var last_name = [];
      var company = [];
      var title_job = [];
      var phone = [];
      var email = [];
      var country = [];
      var city = [];
      var street = [];
      var zip_code = [];

      action.payload.list.map ((client) => {

        if(client.general.firstName.toLowerCase().includes(word)) {
          first_name.push(client);
        } else if(client.general.lastName.toLowerCase().includes(word)) {
          last_name.push(client);
        } else if(client.job.company.toLowerCase().includes(word)) {
          company.push(client);
        } else if(client.job.title.toLowerCase().includes(word)) {
          title_job.push(client);
        } else if(client.contact.phone.toLowerCase().includes(word)) {
          phone.push(client);
        } else if(client.contact.email.toLowerCase().includes(word)) {
          email.push(client);
        } else if(client.address.country.toLowerCase().includes(word)) {
          country.push(client);
        } else if(client.address.city.toLowerCase().includes(word)) {
          city.push(client);
        } else if(client.address.street.toLowerCase().includes(word)) {
          street.push(client);
        } else if(client.address.zipCode.toLowerCase().includes(word)) {
          zip_code.push(client);
        }

      });

      var result = first_name.concat(last_name,
        company, title_job,
        phone, email,
        country, city, street, zip_code );

      return result;
    default:
      return state;
    }

}
