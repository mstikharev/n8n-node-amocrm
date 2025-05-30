import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Entity Type',
		name: 'entityType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['links'],
				operation: ['unlinkEntities'],
			},
		},
		options: [
			{
				name: 'Lead',
				value: 'leads',
			},
			{
				name: 'Contact',
				value: 'contacts',
			},
			{
				name: 'Company',
				value: 'companies',
			},
			{
				name: 'Customer',
				value: 'customers',
			},
		],
		default: 'leads',
		description: 'The type of the main entity to unlink from',
	},
	{
		displayName: 'Unlinks',
		name: 'unlinks',
		placeholder: 'Add Unlink',
		type: 'fixedCollection',
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['links'],
				operation: ['unlinkEntities'],
			},
		},
		default: {},
		options: [
			{
				name: 'unlinkValues',
				displayName: 'Unlink',
				values: [
					{
						displayName: 'Entity ID',
						name: 'entityId',
						type: 'number',
						required: true,
						default: 0,
						description: 'The ID of the main entity',
					},
					{
						displayName: 'Target Entity Type',
						name: 'toEntityType',
						type: 'options',
						required: true,
						options: [
							{
								name: 'Catalog Element',
								value: 'catalog_elements',
							},
							{
								name: 'Company',
								value: 'companies',
							},
							{
								name: 'Contact',
								value: 'contacts',
							},
							{
								name: 'Customer',
								value: 'customers',
							},
							{
								name: 'Lead',
								value: 'leads',
							},
						],
						default: 'contacts',
						description: 'The type of entity to unlink from',
					},
					{
						displayName: 'Target Entity ID',
						name: 'toEntityId',
						type: 'number',
						required: true,
						default: 0,
						description: 'The ID of the entity to unlink from',
					},
					{
						displayName: 'Additional Options',
						name: 'metadata',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								displayName: 'Catalog ID',
								name: 'catalog_id',
								type: 'number',
								default: 0,
								description: 'ID of the catalog (required for catalog elements)',
								displayOptions: {
									show: {
										'/toEntityType': ['catalog_elements'],
									},
								},
							},
							{
								displayName: 'Updated By',
								name: 'updated_by',
								type: 'number',
								default: 0,
								description: 'ID of the user performing the unlink operation',
							},
						],
					},
				],
			},
		],
		description: 'The entity links to remove',
	},
];