// @todo вынести в общий

export type Page = {
  total: number;
  current: number;
};

export declare namespace Events {
  interface Response {
    items: Array<Events.Item>;
    page: Page;
  }

  interface Request {
    text: {
      data: string;
      by: 'title' | 'string';
    };
    date: {
      start: string;
      end: string;
    };
    tags: Array<number>;
    types: Array<number>;
    areas: Array<number>;
    duration: number;
    tickets: number;
    page: number;
    price: number;
  }

  interface Item {
    name: string;
    date: string;
    area: string;
    type: string;
    duration: string;
    ticketsCount: string;
    previewUrl: string;
    price: string;
    tags: string[];
  }
}

export declare namespace Filters {
  namespace Filter {
    interface Item {
      /** Наименование (ключ) фильтра.  */
      name: string;
      /** Заголовок для отображения фильтра. */
      title?: string;
      /** Как следует выводить фильтр. */
      type: 'range' | 'select' | 'multiple-select' | 'calendar' | 'toggle';
      /** Подсказка для тех, кто затрудняется. */
      tooltip?: string; // текст для подсказки
      /** Значения поля. @todo */
      value?: any;
    }

    // @todo расписать значения для каждого отдельного типа фильтра.
    interface Value {
      id?: number;
      name?: string;
      isSelected?: boolean;
    }
  }

  interface Response {
    tagsGroups: Filter.Item;
    areas: Filter.Item;
    type: Filter.Item;
  }

  interface Request {
    text: {
      data: string;
      by: 'title' | 'string';
    };
    date: {
      start: string;
      end: string;
    };
    // @todo - тут filters
    tags: Array<number>;
    types: Array<number>;
    areas: Array<number>;
    duration: number;
    tickets: number;
    page: number;
    price: number;
  }
}
