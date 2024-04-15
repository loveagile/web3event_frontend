export type CityDataType = {
    "id": number,
    "created_at": string,
    "updated_at": string,
    "deleted_at": string|null,
    "count": number,
    "city_id": string,
    "name": string,
    "timezone": string,
    "image": string
}

export type CityEventType = {
    "id": number,
    "created_at": string,
    "updated_at": string,
    "deleted_at": string|null,
    "source_id": string,
    "type": number,
    "is_top": number,
    "topics": [number]|null,
    "topics_name": [
        string
    ],
    "categories": [number]|null,
    "categories_name": null,
    "start_time": string,
    "end_time": string,
    "place": number,
    "register_type": number,
    "locale": string,
    "image": string,
    "title": string,
    "source_url": string,
    "organizer": string,
    "organizer_head": string,
    "organizer_status": number,
    "description": string,
    "pay": number,
    "city": string,
    "city_name": string,
    "ticket": string,
    "lat": number,
    "lon": number,
    "is_hot": number,
    "published": number,
    "is_visible": number,
    "user_id": number,
    "addr": string,
    "collect_num": number,
    "like_num": number,
    "click_num": number,
    "is_collect": number,
    "is_like": number,
    "rate": number,
    "code": string,
    "event_url": string,
    "format": number,
    "exposure": number,
    "important": number,
    "regist_to_see_address": number,
    "host_id_list": any,
    "host_name_list": any,
    "speaker_id_list": any,
    "speaker_name_list": any,
    "capacity": number,
    "is_place": number,
    "hosts": any,
    "speakers": any,
    "organizers": any,
    "host_list": any,
    "speaker_list": any,
    "organizer_list": any,
    "user_name": string,
    "source_type": number,
    "is_ai_upload": number,
    "is_paid": number
}