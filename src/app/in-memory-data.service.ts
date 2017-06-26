import {InMemoryDbService} from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    let heroes = [
      { id: 7, name: 'Nice' },
      { id: 8, name: 'Mike' },
      { id: 9, name: '999aa' },
      { id: 10, name: '10iee' },
      { id: 11, name: '11izxv' },
      { id: 12, name: '12dkfcv' },
      { id: 13, name: '13pppp' },
      { id: 14, name: '14ppiuu' }
      ];

    return {heroes};
  }

}
