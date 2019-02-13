import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface FormServicosItem {
  descricao: string;
  categoria: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: FormServicosItem[] = [
  {id: 1, categoria: 'Hydrogen', descricao:'NONononono'},
  {id: 2, categoria: 'ccc', descricao: 'Helium'},
  {id: 3, categoria:'bbb', descricao: 'Lithium'},
  {id: 4, categoria: 'aaa', descricao: 'Beryllium'},
  {id: 5, categoria: 'ddd', descricao: 'Boron'},
  {id: 6, categoria: 'bbb', descricao: 'Carbon'},
  {id: 7, categoria: 'bbb', descricao: 'Nitrogen'},
  {id: 8, categoria: 'bbb', descricao: 'Oxygen'},
  {id: 9, categoria: 'aaa', descricao:'Fluorine'},
  {id: 10, categoria:'aaa', descricao: 'Neon'},
  {id: 11, categoria:'aaa', descricao: 'Sodium'},
  {id: 12, categoria:'aaa', descricao: 'Magnesium'},
  {id: 13, categoria:'ccc', descricao:  'Aluminum'},
  {id: 14, categoria:'ccc', descricao:  'Silicon'},
  {id: 15, categoria:'ccc', descricao:  'Phosphorus'},
  {id: 16, categoria:'ddd', descricao:  'Sulfur'},
  {id: 17, categoria: 'ddd', descricao: 'Chlorine'},
  {id: 18, categoria: 'ddd', descricao: 'Argon'},
  {id: 19, categoria:'eee', descricao:  'Potassium'},
  {id: 20, categoria:'eee', descricao:  'Calcium'}
];

/**
 * Data source for the FormServicos view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class FormServicosDataSource extends DataSource<FormServicosItem> {
  data: FormServicosItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<FormServicosItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: FormServicosItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: FormServicosItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'descricao': return compare(a.descricao, b.descricao, isAsc);
        case 'categoria': return compare(a.categoria, b.categoria, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
