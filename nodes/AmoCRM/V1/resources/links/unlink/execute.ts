import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const entityType = this.getNodeParameter('entityType', index) as string;
	const unlinks = this.getNodeParameter('unlinks', index) as {
		unlinkValues: Array<{
			entityId: number;
			toEntityType: string;
			toEntityId: number;
			metadata?: IDataObject;
		}>;
	};

	const unlinksData = unlinks.unlinkValues.map((unlink) => {
		const unlinkPayload: IDataObject = {
			entity_id: unlink.entityId,
			to_entity_id: unlink.toEntityId,
			to_entity_type: unlink.toEntityType,
		};

		if (unlink.metadata && Object.keys(unlink.metadata).length > 0) {
			unlinkPayload.metadata = unlink.metadata;
		}

		return unlinkPayload;
	});

	const body = unlinksData;
	const endpoint = `${entityType}/unlink`;

	await apiRequest.call(this, 'POST', endpoint, body);

	return this.helpers.returnJsonArray([{ success: true, message: 'Entities unlinked successfully' }]);
}
