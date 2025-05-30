import { INodeProperties } from 'n8n-workflow';

import * as linkEntities from './link';
import * as unlinkEntities from './unlink';
import * as getLinks from './get';

export { linkEntities, unlinkEntities, getLinks };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['links'],
			},
		},
		options: [
			{
				name: 'Link Entities',
				value: 'linkEntities',
				description: 'Link entities together',
				action: 'Link entities',
			},
			{
				name: 'Unlink Entities',
				value: 'unlinkEntities',
				action: 'Unlink entities',
			},
			{
				name: 'Get Links',
				value: 'getLinks',
				description: 'Get list of entity links',
				action: 'Get entity links',
			},
		],
		default: 'linkEntities',
	},
	...linkEntities.description,
	...unlinkEntities.description,
	...getLinks.description,
];
