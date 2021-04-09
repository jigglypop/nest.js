import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";

@Controller('/events')
export class EventController {
    @Get()
    findAll(){
        return [
            { id : 1, name : 'first'},
            { id : 2, name : 'second'}
        ]
    }

    @Get(':id')
    findOne(@Param('id') id){
        return { id : 1, name : 'first'};
    }

    @Post()
    create(@Body() input: CreateEventDto){
        return input;
    }

    @Patch(':id')
    update(@Param('id') id, @Body() input: UpdateEventDto){
        return input;
    }

    @Delete()
    remove(){}
}