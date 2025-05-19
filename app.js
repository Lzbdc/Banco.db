import {sqlite3} from 'sqlite3';
import {open} from 'sqlite';

function criarEPolularTabelaUsuarios (){
  open({
    filename: './banco.db',
    driver: 'sqlite3.driver'
  })
}
