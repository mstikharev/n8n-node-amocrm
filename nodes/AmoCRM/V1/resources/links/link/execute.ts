import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const entityType = this.getNodeParameter('entityType', index) as string;
	const entityId = this.getNodeParameter('entityId', index) as number;
	const links = this.getNodeParameter('links', index) as {
		linkValues: Array<{
			toEntityType: string;
			toEntityId: number;
			metadata?: IDataObject;
		}>;
	};

	const linksData = links.linkValues.map((link) => {
		const linkPayload: IDataObject = {
			to_entity_id: link.toEntityId,
			to_entity_type: link.toEntityType,
		};

		if (link.metadata && Object.keys(link.metadata).length > 0) {
			linkPayload.metadata = link.metadata;
		}

		return linkPayload;
	});

	const body = linksData;
	const endpoint = `${entityType}/${entityId}/link`;

	const responseData = await apiRequest.call(this, 'POST', endpoint, body);
	return this.helpers.returnJsonArray(responseData);
}
