export type DestinationId = number;

export interface IDestinationSummary {
  country: string;
  id: DestinationId;
  name: string;
  region: string;
  thumbNail: string;
}

export interface IDestination extends IDestinationSummary {
  pictureId: string;
}
