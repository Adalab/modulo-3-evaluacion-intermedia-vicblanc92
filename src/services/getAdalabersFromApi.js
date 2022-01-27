const getAdalabersFromApi = () => {
  return fetch(
    'https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json'
  )
    .then((response) => response.json())
    .then((adalaBersresult) => {
      const adalabers = adalaBersresult.results.map((adalaber) => {
        return {
          name: adalaber.name,
          counselor: adalaber.counselor,
          speciality: adalaber.speciality,
        };
      });
      return adalabers;
    });
};

export default getAdalabersFromApi;
