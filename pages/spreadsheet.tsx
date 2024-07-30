'use client';
import { useRef } from 'react';
import { SheetsDirective, SheetDirective, RangesDirective, RangeDirective, SpreadsheetComponent, SortEventArgs } from '@syncfusion/ej2-react-spreadsheet';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

const SpreadsheetModal = () => {
    let data: object[] = [
        { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCity: 'Reims' },
        { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCity: 'Münster' },
        { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCity: 'Lyon' }
    ];
    const spreadsheetRef = useRef(null);
    const uploaderRef = useRef(null);
    
    const asyncSettings = {
      saveUrl:
        'https://services.syncfusion.com/react/production/api/FileUploader/Save',
      removeUrl:
        'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    };
    const onSortComplete = (args: SortEventArgs): void => {
        let spreadsheet = spreadsheetRef.current as any;
        if (spreadsheet) {
            spreadsheet.selectRange(args.range as string);
        }
    };
    const allowedExtensions = '.xlsx, .xls, .csv';
    const onSuccess = (args:any) => {
      const sheet = spreadsheetRef.current as any;
      if (args.operation == 'upload')
        sheet.open({ file: args.file.rawFile });
    };
    return (
      <div>
          <UploaderComponent
            ref={uploaderRef}
            asyncSettings={asyncSettings}
            success={onSuccess}
            allowedExtensions={allowedExtensions}
          ></UploaderComponent>
          <SpreadsheetComponent
            sortComplete={onSortComplete}
            allowDelete={true}
            ref={spreadsheetRef}
            openUrl="https:services.syncfusion.com/react/production/api/spreadsheet/open"
            allowSave={true} saveUrl='https:services.syncfusion.com/react/production/api/spreadsheet/save'
          />
        </div>
      );
}

export default SpreadsheetModal;