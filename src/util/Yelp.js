const apiKey =
  'MU-Occ1jJ0cU2qJyB_MKYrc4EnsqoxWlRs3A9eC12bSYF7TALjOGnsi-J0EN6rYihOeGCvbnYYlsy-995b1g3pNWSjFF1ChDtVsC8YVvvOk0vc5NLD76K1v6u5XGXnYx';
//const clientId = 'XnihfEunzj9-6UiVwIQ_Zw';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_Code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
