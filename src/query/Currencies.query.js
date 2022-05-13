import { Query, Field } from '@tilework/opus';

export class CurrenciesQuery {
  getCurrenciesQuery(){
    return new Query('currencies', true)
    .addField(new Field('symbol', true))
    .addField(new Field('label', true));
  };
}

export default new CurrenciesQuery()
