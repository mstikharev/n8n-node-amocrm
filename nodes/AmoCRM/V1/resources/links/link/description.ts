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
				operation: ['linkEntities'],
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
		description: 'The type of the main entity to link from',
	},
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['links'],
				operation: ['linkEntities'],
			},
		},
		default: 0,
		description: 'The ID of the main entity',
	},
	{
		displayName: 'Links',
		name: 'links',
		placeholder: 'Add Link',
		type: 'fixedCollection',
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['links'],
				operation: ['linkEntities'],
			},
		},
		default: {},
		options: [
			{
				name: 'linkValues',
				displayName: 'Link',
				values: [
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
						description: 'The type of entity to link to',
					},
					{
						displayName: 'Target Entity ID',
						name: 'toEntityId',
						type: 'number',
						required: true,
						default: 0,
						description: 'The ID of the entity to link to',
					},
					{
						displayName: 'Additional Options',
						name: 'metadata',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								displayName: 'Is Main Contact',
								name: 'main_contact',
								type: 'boolean',
								default: false,
								description: 'Whether this is the main contact for the entity',
								displayOptions: {
									show: {
										'/toEntityType': ['contacts'],
									},
								},
							},
							{
								displayName: 'Quantity',
								name: 'quantity',
								type: 'number',
								default: 1,
								description: 'Quantity of the catalog element',
								displayOptions: {
									show: {
										'/toEntityType': ['catalog_elements'],
									},
								},
							},
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
								description: 'ID of the user performing the link operation',
							},
						],
					},
				],
			},
		],
		description: 'The entities to link',
	},
];