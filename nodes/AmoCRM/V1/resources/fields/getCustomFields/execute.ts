import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const entityType = this.getNodeParameter('entityType', index) as string;
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const options = this.getNodeParameter('options', index) as IDataObject;

	const qs: IDataObject = {};
	const body = {} as IDataObject;

	if (options && Object.keys(options).length > 0) {
		if (options.field_ids) {
			qs.id = options.field_ids.toString().split(',').map((id: string) => parseInt(id.trim(), 10));
		}
		if (options.field_types && Array.isArray(options.field_types) && options.field_types.length > 0) {
			qs.type = options.field_types;
		}
	}

	if (!returnAll) {
		const page = this.getNodeParameter('page', index) as number;
		const limit = this.getNodeParameter('limit', index) as number;
		qs.page = page;
		qs.limit = limit;
	}

	const endpoint = `${entityType}/custom_fields`;

	if (returnAll) {
		const responseData = await apiRequestAllItems.call(this, 'GET', endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData);
	}

	const responseData = await apiRequest.call(this, 'GET', endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
