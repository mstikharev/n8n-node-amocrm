import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const entityType = this.getNodeParameter('entityType', index) as string;
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filter = this.getNodeParameter('filter', index) as IDataObject;

	const qs: IDataObject = {};
	const body = {} as IDataObject;

	if (filter && Object.keys(filter).length > 0) {
		if (filter.entity_id) {
			qs['filter[entity_id]'] = filter.entity_id.toString().split(',').map((id: string) => parseInt(id.trim(), 10));
		}
		if (filter.to_entity_type) {
			qs['filter[to_entity_type]'] = filter.to_entity_type;
		}
		if (filter.to_entity_id) {
			qs['filter[to_entity_id]'] = filter.to_entity_id.toString().split(',').map((id: string) => parseInt(id.trim(), 10));
		}
	}

	if (!returnAll) {
		const page = this.getNodeParameter('page', index) as number;
		const limit = this.getNodeParameter('limit', index) as number;
		qs.page = page;
		qs.limit = limit;
	}

	const endpoint = `${entityType}/links`;

	if (returnAll) {
		const responseData = await apiRequestAllItems.call(this, 'GET', endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData);
	}

	const responseData = await apiRequest.call(this, 'GET', endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
