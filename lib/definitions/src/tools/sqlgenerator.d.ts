import { Field } from '../migration/column';
export declare class SqlGenerator {
    generateCreateTableSql(cls: Function): string;
    generateAlertTableWithAddColumnAction(cls: Function, column: Field): string;
    generateAlertTableWithDropColumnAction(cls: Function, columnName: string): string;
    generateAlertTableWithRenameColumnAction(cls: Function, oldName: string, newName: string): string;
    generateColumnCommentAction(cls: Function): string;
    private sqlTypeToCreateSyntaxString_(sqlType);
    private sqlFlagToCreateSyntaxString_(sqlFlag);
    private sqlDefaultValueToCreateSyntaxString_(sqlDefaultValue);
}
export declare let sqlGenerator: SqlGenerator;
