import { Query, Field } from '@tilework/opus';

export class CurrenciesQuery {
  getCurrenciesQuery(){
    return new Query('currencies', true)
    .addField(new Field('label', true))
    .addField(new Field('symbol', true));
  };
}

export default new CurrenciesQuery()
