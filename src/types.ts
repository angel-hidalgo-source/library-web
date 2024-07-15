export interface Book {
    id: number;
    title: string;
    author: string;
    copies: number;
    availableCopies: number;
  }
  
  export interface SelectedBook extends Book {
    action: 'Lend' | 'Return' | 'Delete';
  }
  