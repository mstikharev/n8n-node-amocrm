import { INodeProperties } from 'n8n-workflow';

import * as getCustomFields from './getCustomFields';

export { getCustomFields };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['fields'],
			},
		},
		options: [
			{
				name: 'Get Custom Fields',
				value: 'getCustomFields',
				description: 'Get custom field definitions',
				action: 'Get custom fields',
			},
		],
		default: 'getCustomFields',
	},
	...getCustomFields.description,
];
