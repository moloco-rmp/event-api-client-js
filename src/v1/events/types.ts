import { ChannelType, RetailEventType } from '../types/external';

export type InsertEventParams = {
  id?: string;
  eventType: RetailEventType;
  timestamp: number;
  channelType: ChannelType;
  userId: string;
  sessionId?: string;
  device?: {
    os: string;
    osVersion?: string;
    advertisingId?: string;
    uniqueDeviceId?: string;
    model?: string;
    ip?: string;
    ua?: string;
    language?: string;
  };
  items?: {
    id: string;
    price: {
      currency: string;
      amount: number;
    };
    quantity: number;
  }[];
  revenue?: {
    currency: string;
    amount: number;
  };
  searchQuery?: string;
  referrerPageId?: string;
};

export type InsertEventHttpRequestBody = {
  id?: string;
  event_type: string;
  timestamp: number;
  channel_type: string;
  user_id: string;
  session_id?: string;
  device?: {
    os: string;
    os_version?: string;
    advertising_id?: string;
    unique_device_id?: string;
    model?: string;
    ip?: string;
    ua?: string;
    language?: string;
  };
  items?: {
    id: string;
    price: {
      currency: string;
      amount: number;
    };
    quantity: number;
  }[];
  revenue?: {
    currency: string;
    amount: number;
  };
  search_query?: string;
  referrer_page_id?: string;
};
