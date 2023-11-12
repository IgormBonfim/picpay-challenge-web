export class CashFlowRequest {
    public startDate: Date;
    public endDate: Date;

    constructor(params: Partial<CashFlowRequest>) {
        this.startDate = params.startDate;
        this.endDate = params.endDate;
    }
}