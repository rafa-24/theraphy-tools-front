type CountryValidation = {
    id: number;
    name: string;
    regex: RegExp;
};

  // Lista de países hispanohablantes con sus validaciones de número telefónico
  const countryPhoneRules: CountryValidation[] = [
    { id: 1, name: "Argentina", regex: /^(\+54|54)?(9[0-9]{10}|[0-9]{10})$/ },
    { id: 2, name: "Bolivia", regex: /^(\+591|591)?[67][0-9]{7}$/ },
    { id: 3, name: "Chile", regex: /^(\+56|56)?(9[0-9]{8}|[2-9][0-9]{7})$/ },
    { id: 4, name: "Colombia", regex: /^(\+57|57)?(3[0-9]{9}|[1-9][0-9]{6})$/ },
    { id: 5, name: "Costa Rica", regex: /^(\+506|506)?[2678][0-9]{7}$/ },
    { id: 6, name: "Cuba", regex: /^(\+53|53)?5[0-9]{7}$/ },
    { id: 7, name: "Ecuador", regex: /^(\+1|1)?(809|829|849)[0-9]{7}$/ },
    { id: 8, name: "El Salvador", regex: /^(\+593|593)?(9[0-9]{8}|[2-7][0-9]{7})$/ },
    { id: 9, name: "España", regex: /^(\+34|34)?[67][0-9]{8}$/ },
    { id: 10, name: "Guatemala", regex: /^(\+502|502)?[34567][0-9]{7}$/ },
    { id: 11, name: "Honduras", regex: /^(\+504|504)?[389][0-9]{7}$/ },
    { id: 12, name: "México", regex: /^(\+52|52)?(1?[0-9]{10})$/ },
    { id: 13, name: "Nicaragua", regex: /^(\+505|505)?[578][0-9]{7}$/ },
    { id: 14, name: "Panamá", regex: /^(\+507|507)?[6][0-9]{7}$/ },
    { id: 15, name: "Paraguay", regex: /^(\+595|595)?[9876][0-9]{7,8}$/ },
    { id: 16, name: "Perú", regex: /^(\+51|51)?9[0-9]{8}$/ },
    { id: 17, name: "Puerto Rico", regex: /^(\+1|1)?(787|939)[0-9]{7}$/ },
    { id: 18, name: "República Dominicana", regex: /^(\+503|503)?[67][0-9]{7}$/ },
    { id: 19, name: "Uruguay", regex: /^(\+598|598)?9[0-9]{7}$/ },
    { id: 20, name: "Venezuela", regex: /^(\+58|58)?(2[0-9]{9}|4[0-9]{9})$/ }
  ];

/**
   * Valida un número telefónico según el país hispanohablante.
   * @param country - Código del país (ejemplo: "MX" para México).
   * @param telephoneNumber - Número telefónico a validar.
   * @returns `true` si el número es válido, `false` si no lo es.
*/

export function validatePhoneNumber(countryId: number, telephoneNumber: string): boolean {
    const countryData = countryPhoneRules.find(c => c.id === countryId);

    if (!countryData) {
      console.error(`País no soportado: ${countryId}`);
      return false;
    }

    return countryData.regex.test(telephoneNumber);
}
