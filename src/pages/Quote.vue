<template>
    <!-- QUOTE ENDS -->
    <section class="quote">
        <div class="quote-container">
            <!-- QUOTE CONTENT -->
            <div class="quote-content">
                <div class="quote-content-head">
                    <!-- INSTANT QUOTE -->
                    <div class="instant-quote">
                        <h3>GET AN INSTANT QUOTE?</h3>
                        <p>The more accurate info you input the more accurate your quote will be, but don’t worry if
                            it’s
                            not perfect.</p>
                    </div>
                </div>

                <!-- QUOTE CONTENT BODY -->
                <div class="quote-content-body">
                   
                    <QuoteVideo />

                    <FormulateForm
                        @submit="submitHandler"
                        #default="{ isLoading }"
                        action=""
                        method="POST"
                        id="quoteForm"
                    >
                    <br>
                    <!-- SERVICES -->
                    <div class="services">
                        <div class="quote-content-box">
                            <div class="quote-inner-head">
                                <h3>Services to Make Your Home Shine</h3>
                            </div>
                            <div class="quote-inner-body">
                                <div class="row">
                                    <div class="col-3" v-for="service in services" :key="service.id">
                                        <div class="services-box">
                                            <div class="checkbox-input custom-checkbox">
                                                <input type="checkbox" v-model="form.checkedServices"
                                                :value="service.id"
                                                 name="checkbox" :id="`service-${service.id}`" />
                                                <label :for="`service-${service.id}`"></label>
                                            </div>
                                            <div class="service-box-img-name">
                                                <div class="service-box-img">
                                                    <img :src="service.fullImage"
                                                        alt="Service House">
                                                </div>
                                                <div class="service-box-name">
                                                    <p>{{ service.name }}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SERVICES ENDS -->
                    {{ form }}
                  <template v-if="form.checkedServices.length > 0">
                    <!-- <template v-if="true"> -->
                    <!-- PROPERTY INFORMATION -->
                    <div class="property">
                        <div class="quote-content-box">
                            <div class="quote-inner-head quote-inner-head-flex">
                                <h3>Property Information</h3>
                                <div class="icon collapseIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13"
                                        fill="none">
                                        <path
                                            d="M2.7325 0.60083L10 7.8525L17.2675 0.60083L19.5 2.83333L10 12.3333L0.5 2.83333L2.7325 0.60083Z"
                                            fill="#006ABD" />
                                    </svg>
                                </div>
                            </div>
                            <div class="quote-inner-body">
                                <div class="row">
                                    <div class="col-5">
                                        <div class="dropdown-wrap">
                        
                                            <div class="form-group">
                                                  <FormulateInput
                                                    name="property_num_of_floors"
                                                    v-model="form.numOfFloors"
                                                    :options="propertyNumberOfFloors"
                                                    type="select"
                                                    placeholder="Select Story"
                                                    label="Number of floors (above ground)?"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                            required: 'Please select a story'
                                                    }"
                                                    />
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="property-info">
                                    <p class="property-title">House Square Footage</p>
                                    <div class="row">
                                               <FormulateInput
                                                    v-model="form.houseSquareFootageVal"
                                                    :options="{knowActualRange: 'I know the actual range (feet)', dontKnowActualRange: 'I don\'t know the actual range (feet)'}"
                                                    type="radio"
                                                    @input="changePropertyInfo"
                                                    outer-class="col-12"
                                                    wrapper-class="range-btn-box d-block"
                                                    element-class="row"
                                                    input-class="col-6 d-flex"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                     required: 'Please select a range'
                                                    }"
                                                 />
                                            
                                             <div class="col-6">
                                                  <FormulateInput
                                                v-if="form.houseSquareFootageVal === 'knowActualRange'"
                                                v-model="form.houseSquareFootageKnow"
                                                key="knowActualRange"
                                                name="knowActualRange"
                                                type="text"
                                                placeholder=""
                                                wrapper-class="d-block"
                                                error-class="quote-invalid-error"
                                                input-class="form-control"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Input Actual Range'
                                                }"
                                              />
                                             </div>
                                         
                                             <div class="col-6">
                                                  <FormulateInput
                                                v-if="form.houseSquareFootageVal === 'dontKnowActualRange'"
                                                v-model="form.houseSquareFootageDontKnow"
                                                :options="propertyActualRange"
                                                type="select"
                                                key="dontKnowActualRange"
                                                name="dontKnowActualRange"
                                                wrapper-class="d-block"
                                                input-class="form-control"
                                                error-class="quote-invalid-error"
                                                placeholder="Select Range"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Select Option'
                                                }"
                                                />
                                             </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <!-- PROPERTY INFORMATION ENDS -->

                  </template>
                  

                <template v-if="checkServiceInclude(7)">
                    <!-- HOUSE WASH -->
                    <div class="house-wash">
                        <div class="quote-content-box">
                            <div class="quote-inner-head quote-inner-head-flex">
                                <h3>House Wash</h3>
                                <div class="icon collapseIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13"
                                        fill="none">
                                        <path
                                            d="M2.7325 0.60083L10 7.8525L17.2675 0.60083L19.5 2.83333L10 12.3333L0.5 2.83333L2.7325 0.60083Z"
                                            fill="#006ABD" />
                                    </svg>
                                </div>
                            </div>
                            <div class="quote-inner-body">
                                    
                                     <FormulateInput
                                            type="checkbox"
                                            v-model="form.houseWash"
                                            validation="required|min:1"
                                            element-class="row"
                                            input-class="col-3"
                                            error-class="quote-invalid-error"
                                            :options="houseWashData"
                                            :validation-messages="{
                                                required: 'This field is required',
                                                min: 'Please check atleast one field'   
                                            }"
                                     />

                            </div>
                        </div>
                    </div>
                    <!-- HOUSE WASH ENDS -->
                </template>
                

                 <template v-if="checkServiceInclude(8)">
                      <!-- ROOF CLEAN -->
                   <div class="roof-clean">
                        <div class="quote-content-box">
                            <div class="quote-inner-head quote-inner-head-flex">
                                <h3>Roof Clean</h3>
                                <div class="icon collapseIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13"
                                        fill="none">
                                        <path
                                            d="M2.7325 0.60083L10 7.8525L17.2675 0.60083L19.5 2.83333L10 12.3333L0.5 2.83333L2.7325 0.60083Z"
                                            fill="#006ABD" />
                                    </svg>
                                </div>
                            </div>
                            <div class="quote-inner-body">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="roof-clean dropdown-wrap">
        
                                            <div class="form-group">
                                                <FormulateInput
                                                    v-model="form.roof.typeOfRoof"
                                                    name="type_of_roof"
                                                    :options="typeOfRoofData"
                                                    type="select"
                                                    placeholder="Please choose an option"
                                                    label="Type of Roof of your Home"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                            required: 'Please select type of roof'
                                                    }"
                                                    />
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="roof-clean dropdown-wrap">
                                            <FormulateInput
                                                    v-model="form.roof.describeYourRoof"
                                                    name="describe_your_roof"
                                                    :options="describeYourRoofData"
                                                    type="select"
                                                    placeholder="Please choose an option"
                                                    label="Describe Your Roof Walkability"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                            required: 'Please select roof Walkability'
                                                    }"
                                                    />
                                        </div>
                                    </div>
                                </div>

                                <div class="roof-clean-content">
                                    <p>Do you have a detached garage that will receive Roof Cleaning?</p>
                                             <FormulateInput
                                                    v-model="form.roof.roofGarage"
                                                    :options="{yes: 'Yes', no: 'No'}"
                                                    type="radio"
                                                    label=""
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    element-class='d-flex'
                                                    input-class='d-flex'
                                                    :validation-messages="{
                                                     required: 'Please select a range'
                                                    }"
                                                 />

                                </div>

                            </div>
                        </div>
                   </div>
                  <!-- ROOF CLEAN ENDS -->
                 </template>
                 
                  <template v-if="checkServiceInclude(10)">
                <!-- <template v-if="true"> -->
                        <!-- DRIVEWAY -->
                  <div class="driveway">
                        <div class="quote-content-box">
                            <div class="quote-inner-head quote-inner-head-flex">
                                <h3>Driveway, Sidewalk, and Patios</h3>
                                <div class="icon collapseIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13"
                                        fill="none">
                                        <path
                                            d="M2.7325 0.60083L10 7.8525L17.2675 0.60083L19.5 2.83333L10 12.3333L0.5 2.83333L2.7325 0.60083Z"
                                            fill="#006ABD" />
                                    </svg>
                                </div>
                            </div>
                            <div class="quote-inner-body">
                                <!-- DRIVEWAY OPTION LIST -->
                                <div class="driveway-option-list">
                                    <div class="driveway-row">
                                        <div class="driveway-dropdown">
                                            <div class="driveway-option dropdown-wrap">
                                                   
                                                    <FormulateInput
                                                    v-model="selectedDrivewayField"
                                                    name="test"
                                                    :options="drivewayOptions"
                                                    type="select"
                                                    placeholder="Please choose an option"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    :validation="Object.keys(form.driveway.selectedDrivewayOptions).length <= 0 ? 'required' : 'optional'"
                                                    :validation-messages="{
                                                            required: 'Please select an option'
                                                    }"
                                                    />

                                                    
                                                </div>
                                        
                                        </div>
                                        <div class="driveway-btn">
                                            <div class="driveway-option">
                                                <button class="driveway-option-btn" @click="addNewOption">
                                                    <span class="icon-text">
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                                                                    fill="white" />
                                                            </svg></span>
                                                        <span>Add new option</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="driveway-list-content">
                                        <div class="driveway-list">
                                            
                                            <template v-if="Object.keys(form.driveway.selectedDrivewayOptions).length > 0">
                                                <!-- ITEM 1 -->
                                            <div class="driveway-item" v-for="option, index in form.driveway.selectedDrivewayOptions" :key="option.id">
                                                <div class="driveway-text">
                                                    <span>{{ option }}</span>
                                                </div>
                                                <div class="driveway-icon" @click="removeOption(index)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 20 20" fill="none">
                                                        <path
                                                            d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM16 6H4V18H16V6ZM11.414 12L13.182 13.768L11.768 15.182L10 13.414L8.232 15.182L6.818 13.768L8.586 12L6.818 10.232L8.232 8.818L10 10.586L11.768 8.818L13.182 10.232L11.414 12ZM7 2V4H13V2H7Z"
                                                            fill="#505050" />
                                                    </svg>
                                                </div>
                                              </div>
                                            </template>
                                            
                                        </div>
                                    </div>

                                </div>
                                <!-- DRIVEWAY OPTION LIST ENDS -->

                                <!-- CONCRETE -->
                                <div class="driveway-concrete">
                                    <div class="row">
                                        <div class="col-7 concrete-col">
                                            <div class="concrete-content">
                                                <p>How would you rate the condition of your concrete?</p>
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <div class="concrete-dropdown dropdown-wrap">
                                                 <FormulateInput
                                                    v-model="form.driveway.concreteConditionRate"
                                                    name="form_concrete_condition_rate"
                                                    :options="drivewayConcreteRate"
                                                    type="select"
                                                    placeholder="Please choose an option"
                                                    label=""
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                            required: 'Please select an option'
                                                    }"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- DRIVEWAY INFO -->
                                <div class="driveway-info">
                            
                                   <!-- 2 CAR DRIVEWAY -->
                                   <template v-if="checkDrivewayOption(1)">
                                   
                                    <div class="driveway-info-item">
                                        <div class="driveway-info-item-head">
                                            <h3>2 Car Driveway</h3>
                                            <p>How Many Cars fit in the Driveway?</p>
                                        </div>
                                        <div class="row">
                     
                                          <FormulateInput
                                                    v-model="form.driveway.car2DrivewayVal"
                                                    :options="{knowCar2Range: 'I know the actual driveway length (feet)', dontKnowCar2Range: 'Number of Cars'}"
                                                    @input="changeCar2Driveway"
                                                    type="radio"
                                                    outer-class="col-12"
                                                    wrapper-class="range-btn-box d-block"
                                                    element-class="row"
                                                    input-class="col-6 d-flex"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                     required: 'Please select a range'
                                                    }"
                                                 />
                                            
                                             <div class="col-6">
                                                <FormulateInput
                                                v-if="form.driveway.car2DrivewayVal === 'knowCar2Range'"
                                                v-model="form.driveway.car2DrivewayKnow"
                                                key="knowCar2Range"
                                                name="knowCar2Range"
                                                type="text"
                                                placeholder=""
                                                wrapper-class="d-block"
                                                error-class="quote-invalid-error"
                                                input-class="form-control"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Input Actual Range'
                                                }"
                                              />
                                             </div>
                                             
                                             <div class="col-6">
                                                  <FormulateInput
                                                v-if="form.driveway.car2DrivewayVal === 'dontKnowCar2Range'"
                                                v-model="form.driveway.car2DrivewayDontKnow"
                                                :options="drivewayCar2RangeList"
                                                type="select"
                                                key="dontKnowCar2Range"
                                                name="dontKnowCar2Range"
                                                wrapper-class="d-block"
                                                input-class="form-control"
                                                error-class="quote-invalid-error"
                                                placeholder="Select Range"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Select Option'
                                                }"
                                                />
                                             </div>

                                        </div>
                                    </div>
                                   </template>
                                    
                                    <!-- 3 CAR DRIVEWAY -->
                                    <template v-if="checkDrivewayOption(2)">    
                                    <div class="driveway-info-item">
                                        <div class="driveway-info-item-head">
                                            <h3>3 Car Driveway</h3>
                                            <p>How Many Cars fit in the Driveway?</p>
                                        </div>
                                        <div class="row">
                     
                                          <FormulateInput
                                                    v-model="form.driveway.car3DrivewayVal"
                                                    :options="{knowCar3Range: 'I know the actual driveway length (feet)', dontKnowCar3Range: 'Number of Cars'}"
                                                    type="radio"
                                                    @input="changeCar3Driveway"
                                                    outer-class="col-12"
                                                    wrapper-class="range-btn-box d-block"
                                                    element-class="row"
                                                    input-class="col-6 d-flex"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                     required: 'Please select a range'
                                                    }"
                                                 />
                                            
                                             <div class="col-6">
                                                <FormulateInput
                                                v-if="form.driveway.car3DrivewayVal === 'knowCar3Range'"
                                                v-model="form.driveway.car3DrivewayKnow"
                                                key="knowCar3Range"
                                                name="knowCar3Range"
                                                type="text"
                                                placeholder=""
                                                wrapper-class="d-block"
                                                error-class="quote-invalid-error"
                                                input-class="form-control"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Input Actual Range'
                                                }"
                                              />
                                             </div>
                                             
                                             <div class="col-6">
                                                  <FormulateInput
                                                v-if="form.driveway.car3DrivewayVal === 'dontKnowCar3Range'"
                                                v-model="form.driveway.car3DrivewayDontKnow"
                                                :options="drivewayCar3RangeList"
                                                type="select"
                                                key="dontKnowCar3Range"
                                                name="dontKnowCar3Range"
                                                wrapper-class="d-block"
                                                input-class="form-control"
                                                error-class="quote-invalid-error"
                                                placeholder="Select Range"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Select Option'
                                                }"
                                                />
                                             </div>

                                        </div>
                                    </div>
                                   </template>

                                    <!-- CIRCULAR DRIVEWAY -->
                                    <template v-if="checkDrivewayOption(3)">                      
                                    <div class="driveway-info-item">
                                        <div class="driveway-info-item-head">
                                            <h3>Circular Driveway</h3>
                                            <p>How Many Cars fit in the Driveway?</p>
                                        </div>
                                        <div class="row">
                     
                                          <FormulateInput
                                                    v-model="form.driveway.circularDrivewayVal"
                                                    :options="{knowCircularRange: 'I know the actual driveway length (feet)', dontKnowCircularRange: 'Number of Cars'}"
                                                    type="radio"
                                                    outer-class="col-12"
                                                    @input="changeCircularDriveway"
                                                    wrapper-class="range-btn-box d-block"
                                                    element-class="row"
                                                    input-class="col-6 d-flex"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                     required: 'Please select a range'
                                                    }"
                                                 />
                                            
                                             <div class="col-6">
                                                <FormulateInput
                                                v-if="form.driveway.circularDrivewayVal === 'knowCircularRange'"
                                                v-model="form.driveway.circularDrivewayKnow"
                                                key="knowCircularRange"
                                                name="knowCircularRange"
                                                type="text"
                                                placeholder=""
                                                wrapper-class="d-block"
                                                error-class="quote-invalid-error"
                                                input-class="form-control"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Input Actual Range'
                                                }"
                                              />
                                             </div>
                                             
                                             <div class="col-6">
                                                  <FormulateInput
                                                v-if="form.driveway.circularDrivewayVal === 'dontKnowCircularRange'"
                                                v-model="form.driveway.circularDrivewayDontKnow"
                                                :options="drivewayCircularRangeList"
                                                type="select"
                                                key="dontKnowCircularRange"
                                                name="dontKnowCircularRange"
                                                wrapper-class="d-block"
                                                input-class="form-control"
                                                error-class="quote-invalid-error"
                                                placeholder="Select Range"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Select Option'
                                                }"
                                                />
                                             </div>

                                        </div>
                                    </div>
                                   </template>

                                    <!-- SIDEWALK -->
                                    <template v-if="checkDrivewayOption(4)"> 
                                    <div class="driveway-info-item">
                                        <div class="driveway-info-item-head">
                                            <h3>Sidewalk</h3>
                                            <p>Lot Size</p>
                                        </div>
                                        <div class="row">
                     
                                          <FormulateInput
                                                    v-model="form.driveway.sidewalkVal"
                                                    :options="{standardLot: 'Standard Lot', cornerLot: 'Corner Lot'}"
                                                    type="radio"
                                                    name="drivewaySidewalk"
                                                    outer-class="col-12"
                                                    wrapper-class="range-btn-box d-block"
                                                    element-class="row"
                                                    input-class="col-6 d-flex"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                     required: 'Please select a sidewalk'
                                                    }"
                                                 />

                                        </div>
                                    </div>
                                   </template>

                                    <!-- PORCH -->
                                    <template v-if="checkDrivewayOption(5)">
                                   
                                    <div class="driveway-info-item">
                                        <div class="driveway-info-item-head">
                                            <h3>Porch</h3>
                                            <p>Porch Size</p>
                                        </div>
                                        <div class="row">
                     
                                          <FormulateInput
                                                    v-model="form.driveway.porchVal"
                                                    :options="{frontPorch: 'Front Porch', wrapAroundPorch: 'Wrap Around Porch'}"
                                                    type="radio"
                                                    name="drivewayPorch"
                                                    outer-class="col-12"
                                                    wrapper-class="range-btn-box d-block"
                                                    element-class="row"
                                                    input-class="col-6 d-flex"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                     required: 'Please select a porch'
                                                    }"
                                                 />

                                        </div>
                                    </div>
                                    </template>

                                     <!-- BACK PORCH / DECK -->
                                    <template v-if="checkDrivewayOption(6)">                      
                                    <div class="driveway-info-item">
                                        <div class="driveway-info-item-head">
                                            <h3>Back Porch / Deck</h3>
                                            <p>Size</p>
                                        </div>
                                        <div class="row">
                     
                                          <FormulateInput
                                                    v-model="form.driveway.backPorchVal"
                                                    :options="{knowBackPorchRange: 'I know the actual square footage (feet)', dontKnowBackPorchRange: 'Square Footage Range'}"
                                                    type="radio"
                                                    @input="changeBackPorchDriveway"
                                                    outer-class="col-12"
                                                    wrapper-class="range-btn-box d-block"
                                                    element-class="row"
                                                    input-class="col-6 d-flex"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                     required: 'Please select a range'
                                                    }"
                                                 />
                                            
                                             <div class="col-6">
                                                <FormulateInput
                                                v-if="form.driveway.backPorchVal === 'knowBackPorchRange'"
                                                v-model="form.driveway.backPorchKnow"
                                                key="knowBackPorchRange"
                                                name="knowBackPorchRange"
                                                type="text"
                                                placeholder=""
                                                wrapper-class="d-block"
                                                error-class="quote-invalid-error"
                                                input-class="form-control"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Input Actual Range'
                                                }"
                                              />
                                             </div>
                                             
                                             <div class="col-6">
                                                  <FormulateInput
                                                v-if="form.driveway.backPorchVal === 'dontKnowBackPorchRange'"
                                                v-model="form.driveway.backPorchDontKnow"
                                                :options="backPorchRangeList"
                                                type="select"
                                                key="dontKnowBackPorchRange"
                                                name="dontKnowBackPorchRange"
                                                wrapper-class="d-block"
                                                input-class="form-control"
                                                error-class="quote-invalid-error"
                                                placeholder="Select Range"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Select Option'
                                                }"
                                                />
                                             </div>

                                        </div>
                                    </div>
                                   </template>

                                   <!-- POOL DECK -->
                                    <template v-if="checkDrivewayOption(7)">                      
                                    <div class="driveway-info-item">
                                        <div class="driveway-info-item-head">
                                            <h3>Pool Deck</h3>
                                            <p>Size</p>
                                        </div>
                                        <div class="row">
                     
                                          <FormulateInput
                                                    v-model="form.driveway.poolDeckVal"
                                                    :options="{knowPoolDeckRange: 'I know the actual square footage (feet)', dontKnowPoolDeckRange: 'Square Footage Range'}"
                                                    type="radio"
                                                    @input="changePoolDeckDriveway"
                                                    outer-class="col-12"
                                                    wrapper-class="range-btn-box d-block"
                                                    element-class="row"
                                                    input-class="col-6 d-flex"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                     required: 'Please select a range'
                                                    }"
                                                 />
                                            
                                             <div class="col-6">
                                                <FormulateInput
                                                v-if="form.driveway.poolDeckVal === 'knowPoolDeckRange'"
                                                v-model="form.driveway.poolDeckKnow"
                                                key="knowPoolDeckRange"
                                                name="knowPoolDeckRange"
                                                type="text"
                                                placeholder=""
                                                wrapper-class="d-block"
                                                error-class="quote-invalid-error"
                                                input-class="form-control"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Input Actual Range'
                                                }"
                                              />
                                             </div>
                                             
                                             <div class="col-6">
                                                  <FormulateInput
                                                v-if="form.driveway.poolDeckVal === 'dontKnowPoolDeckRange'"
                                                v-model="form.driveway.poolDeckDontKnow"
                                                :options="poolDeckRangeList"
                                                type="select"
                                                key="dontKnowPoolDeckRange"
                                                name="dontKnowPoolDeckRange"
                                                wrapper-class="d-block"
                                                input-class="form-control"
                                                error-class="quote-invalid-error"
                                                placeholder="Select Range"
                                                validation="required"
                                                :validation-messages="{
                                                    required: 'Please Select Option'
                                                }"
                                                />
                                             </div>

                                        </div>
                                    </div>
                                   </template>

                                </div>
                            </div>
                        </div>
                  </div>
                  <!-- DRIVEWAY ENDS -->
                </template>
                
                <template v-if="form.checkedServices.length > 0">
                 <!-- CONTACT -->
                 <div class="contact">
                        <div class="quote-content-box">
                            <div class="quote-inner-head quote-inner-head-flex">
                                <h3>Contact Information</h3>
                                <div class="icon collapseIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13"
                                        fill="none">
                                        <path
                                            d="M2.7325 0.60083L10 7.8525L17.2675 0.60083L19.5 2.83333L10 12.3333L0.5 2.83333L2.7325 0.60083Z"
                                            fill="#006ABD" />
                                    </svg>
                                </div>
                            </div>
                            <div class="quote-inner-body">
            
                                    <div class="row">
                                        <div class="col-6 contact-col">
                                            <div class="form-group">
                
                                                <FormulateInput
                                                    v-model="form.contact.first_name"
                                                    type="text"
                                                    label="First Name"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                        required: 'Please enter a first name'  
                                                     }"
                                                    />

                                            </div>
                                        </div>

                                        <div class="col-6 contact-col">
                                            <div class="form-group">
                                                <FormulateInput
                                                    v-model="form.contact.last_name"
                                                    type="text"
                                                    label="Last Name"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                        required: 'Please enter a last name'  
                                                     }"
                                                    />
                                            </div>
                                        </div>

                                        <div class="col-6 contact-col">
                                            <div class="form-group">
                                               <FormulateInput
                                                    v-model="form.contact.phone_number"
                                                    type="text"
                                                    label="Phone Number"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                        required: 'Please enter a Phone Number'  
                                                     }"
                                                    />
                                            </div>
                                        </div>

                                        <div class="col-6 contact-col">
                                            <div class="form-group">
                                                <FormulateInput
                                                    v-model="form.contact.email"
                                                    type="email"
                                                    label="Email"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required|email"
                                                    :validation-messages="{
                                                        required: 'Please enter an Email',
                                                        email: 'Please enter a valid email'
                                                     }"
                                                    />
                                            </div>
                                        </div>

                                        <div class="col-6 contact-col">
                                            <div class="form-group">
                                                <FormulateInput
                                                    v-model="form.contact.street_address"
                                                    type="text"
                                                    label="Street Address"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                        required: 'Please enter a Street Address'  
                                                     }"
                                                    />
                                            </div>
                                        </div>

                                        <div class="col-6 contact-col">
                                            <div class="form-group">
                                                 <FormulateInput
                                                    v-model="form.contact.zip_code"
                                                    type="text"
                                                    label="Zip Code"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required|number"
                                                    :validation-messages="{
                                                        required: 'Please enter a Zip Code',
                                                        number: 'Zip Code must be a number'  
                                                     }"
                                                    />
                                            </div>
                                        </div>

                                        <div class="col-6 contact-col">
                                            <div class="form-group">
                                                <FormulateInput
                                                    v-model="form.contact.state"
                                                    name="form_contact_state"
                                                    :options="contactState"
                                                    type="select"
                                                    placeholder="Select State"
                                                    label="State"
                                                    input-class="form-control"
                                                    error-class="quote-invalid-error"
                                                    validation="required"
                                                    :validation-messages="{
                                                            required: 'Please select a state'
                                                    }"
                                                    />
                                            </div>
                                        </div>

                                        <div class="col-6 contact-col">
                                            <div class="form-group">
                                                <FormulateInput
                                                    v-model="form.contact.city"
                                                    name="form_contact_city"
                                                    :options="contactState"
                                                    type="select"
                                                    placeholder="Select City"
                                                    label="City"
                                                    input-class="form-control"
                                                    validation="required"
                                                    error-class="quote-invalid-error"
                                                    :validation-messages="{
                                                            required: 'Please select a city'
                                                    }"
                                                    />
                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </div>
                 </div>
                 <!-- CONTACT ENDS -->

                <!-- NOTE -->
                <div class="note">
                    <div class="quote-content-box">
                    <div class="quote-inner-head">
                        <h3>Add note</h3>
                    </div>
                    <div class="quote-inner-body">
                        <div class="note-content">
                        <div class="note-form">
                            <div class="form-group">

                            <FormulateInput
                                    type="textarea"
                                    v-model="form.note"
                                    validation="required"
                                    cols="30"
                                    rows="10"
                                    input-class="form-control"
                                    error-class="quote-invalid-error"
                                    :validation-messages="{
                                        required: 'Please add a note'   
                                    }"
                                />

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <!-- NOTE ENDS -->

                 <!-- GET QUOTE -->
                <div class="get-quote">
                        <div class="get-quote-inner">
                            <div class="get-quote-btn">
                                <!-- <button>Get the Quote</button> -->
                                 <FormulateInput
                                  type="submit"
                                  :disabled="isLoading"
                                  :label="loadSpinner ? 'Loading...' : 'Get the Quote'"
                                  />
                            </div>
                            <p>Call for Immediate Assistance (210-724-6026)</p>
                        </div>
                </div>

                </template>

                </FormulateForm>
                </div>
                <!-- QUOTE CONTENT BODY ENDS -->

            </div>
            <!-- QUOTE CONTENT ENDS -->
        </div>
    </section>

</template>

<script>

import axios from 'axios'
import _ from 'lodash'
import QuoteVideo from '../components/Quote/QuoteVideo'

export default {
    name: 'quote',
    components: {
        QuoteVideo,
  },
  data() {
      return {
          isLoading: true,
          loadSpinner: false,
          services: [],
          form: {
              numOfFloors: '',
              houseSquareFootageVal: '',
              houseSquareFootageKnow: '',
              houseSquareFootageDontKnow: '',
              houseWash: [],
              checkedServices: [],
              note: '',
              roof: {
                  typeOfRoof: '',
                  describeYourRoof: '',
                  roofGarage: ''
              },
              driveway: {
                  concreteConditionRate: '',
                  selectedDrivewayOptions: {},
                  car2DrivewayVal: '',
                  car2DrivewayKnow: '',
                  car2DrivewayDontKnow: '',
                  car3DrivewayVal: '',
                  car3DrivewayKnow: '',
                  car3DrivewayDontKnow: '',
                  circularDrivewayVal: '',
                  circularDrivewayKnow: '',
                  circularDrivewayDontKnow: '',
                  sidewalkVal: '',
                  porchVal: '',
                  backPorchVal: '',
                  backPorchKnow: '',
                  backPorchDontKnow: '',
                  poolDeckVal: '',
                  poolDeckKnow: '',
                  poolDeckDontKnow: '',
              },
              contact: {
                  first_name: '',
                  last_name: '',
                  phone_number: '',
                  email: '',
                  street_address: '',
                  zip_code: '',
                  state: '',
                  city: '',
              }
          },
          contactState: [
                      {
                          id: 1,
                          "value": 'pakistan',
                          "label": 'Pakistan'
                      },
                      {
                          id: 2,
                          "value": 'united-state',
                          "label": 'United State'
                      },
                      {
                          id: 3,
                          "value": 'united-kingdom',
                          "label": 'United Kingdom'
                      }
          ],
          contactCity: [
                      {
                          id: 1,
                          "value": 'los-angeles',
                          "label": 'Los Angeles'
                      },
                      {
                          id: 2,
                          "value": 'chicago',
                          "label": 'Chicago'
                      },
                      {
                          id: 3,
                          "value": 'new-york',
                          "label": 'New York'
                      }
           ],
          propertyNumberOfFloors: [],
          propertyActualRange: [],
          houseWashData: {
              stucco: 'Stucco',
              vinysiding: 'Vinyl Siding',
              paintedwood: 'Painted Wood',
              stainedwood: 'stainedwood',
              brick: 'Brick',
              stone: 'Stone',
              hardyboard: 'Hardy Board',                              
          },
          typeOfRoofData: [
              {
            "id": 1,
            "value": 'asphalt-shingle',
            "label": "Asphalt Shingle"
            },
            {
            "id": 2,
            "value": 'tite',
            "label": "Tile"
            },
            {
            "id": 3,
            "value": 'metal-roof',
            "label": "Metal Roof"
            },
          ],
          describeYourRoofData: [
            {
            "id": 1,
            "value": 'easily-walkable',
            "label": "Easily Walkable"
            },
            {
            "id": 2,
            "value": 'difficult-to-walk',
            "label": "Difficult to walk"
            },
            {
            "id": 3,
            "value": 'impossible-to-walk',
            "label": "Impossible to walk"
            },
          ],
         selectedDrivewayField: '',
         drivewayOptions: {
               1 : '1 car driveway',
               2 : '2 car driveway',
               3 : '3 car driveway',
               4 : 'Circular driveway',
               5 : 'Sidewalk',
               6 : 'Porch',
               7 : 'Back Porch / Deck',
               8 : 'Pool Deck',
          },
          drivewayConcreteRate: [
            {
            "id": 1,
            "value": 1,
            "label": "Really dirty & stained"
            },
             {
             "id": 2,
             "value": 2,
             "label": "Moderately Dirty"
             },
             {
              "id": 3,
              "value": 3,
              "label": "Just needs minor maintenance cleaning"
             }
          ],
          drivewayCar2RangeList: [],
          drivewayCar3RangeList: [],
          drivewayCircularRangeList: [],
          backPorchRangeList: [],
          poolDeckRangeList: []
      }
  },
  methods: {
      submitHandler() {
          alert('submitted');
          console.log(this.form);
          return;
        //   axios.post(`/api/quote`, this.form).then((response) => {
        //       console.log(response);
        //   }).catch((err) => {
        //       console.log(err);
        //   });
      },
      addNewOption(e) {
          e.preventDefault();
          if(this.selectedDrivewayField == '') {
              return;
          }
          let selectedOption = _.pick(this.drivewayOptions, this.selectedDrivewayField);
          this.form.driveway.selectedDrivewayOptions = Object.assign({}, this.form.driveway.selectedDrivewayOptions, { [this.selectedDrivewayField] : selectedOption[this.selectedDrivewayField]});
          this.drivewayOptions = _.omit(this.drivewayOptions, this.selectedDrivewayField);
      },
      removeOption(optionId) {
          let selectedOption = _.pick(this.form.driveway.selectedDrivewayOptions, optionId);
          this.drivewayOptions = Object.assign({}, this.drivewayOptions, { [optionId] : selectedOption[optionId]});
          this.form.driveway.selectedDrivewayOptions = _.omit(this.form.driveway.selectedDrivewayOptions, optionId);
          this.removeOptionVal(optionId);
         // this.selectedDrivewayField = '';
      },
      checkServiceInclude(serviceId){
          return this.form.checkedServices.includes(serviceId);
      },
      checkDrivewayOption(optionId) {
          return _.has(this.form.driveway.selectedDrivewayOptions, optionId);
      },
      // ============= CHANGE EVENTS ====================
      changePropertyInfo() {
          this.form.houseSquareFootageKnow = '';
          this.form.houseSquareFootageDontKnow = '';
      },
      changeCar2Driveway() {
          this.form.driveway.car2DrivewayKnow = '';
          this.form.driveway.car2DrivewayDontKnow = '';
      },
      changeCar3Driveway() {
          this.form.driveway.car3DrivewayKnow = '';
          this.form.driveway.car3DrivewayDontKnow = '';
      },
      changeCircularDriveway() {
          this.form.driveway.circularDrivewayKnow = '';
          this.form.driveway.circularDrivewayDontKnow = '';
      },
      changeBackPorchDriveway() {
          this.form.driveway.backPorchKnow = '';
          this.form.driveway.backPorchDontKnow = '';
      },
      changePoolDeckDriveway() {
          this.form.driveway.poolDeckKnow = '';
          this.form.driveway.poolDeckDontKnow = '';
      },
      // ============= EMPTY / CHANGE VALUE TO DEFAULT ======================
      removeOptionVal(optionId) {
          if(optionId == 1) {
              this.form.driveway.car2DrivewayVal = '';
              this.changeCar2Driveway();
          } else if(optionId == 2) {
              this.form.driveway.car3DrivewayVal = '';
              this.changeCar3Driveway();
          } else if(optionId == 3) {
              this.form.driveway.circularDrivewayVal = '';
              this.changeCircularDriveway();
          } else if(optionId == 4) {
              this.form.driveway.sidewalkVal = '';
          } else if(optionId == 5) {
              this.form.driveway.porchVal = '';
          } else if(optionId == 6) {
              this.form.driveway.backPorchVal = '';
              this.changeBackPorchDriveway();
          } else if(optionId == 7) {
              this.form.driveway.poolDeckVal = '';
              this.changePoolDeckDriveway();
          }
      },
      async getAllServices() {
          await axios.get('/api/services').then((res) => {
              this.services = res.data.data;
          }).catch((err) => {
              console.log(err)
          });
      },
      async getPropertyStories() {
          await axios.get('/api/stories').then((res) => {
              this.propertyNumberOfFloors = res.data.data;
          }).catch((err) => {
              console.log(err)
          });
      },
      async getSquareFoots() {
          await axios.get('/api/square-foots').then((res) => {
              this.propertyActualRange = res.data.data;
              this.backPorchRangeList = res.data.data;
              this.poolDeckRangeList = res.data.data;
          }).catch((err) => {   
              console.log(err);
          });
      },
      async getDrivewayOptions() {
          await axios.get('/api/driveway').then((res) => {
                let responseData = res.data.data;
                let drivewayOptions = {};

                responseData.filter(item => {
                    drivewayOptions[item.id] = item.name;
                });
                
               this.drivewayOptions = drivewayOptions;

          }).catch((err) => {
              console.log(err);
          });
      },
      async getNumberOfCars() {
          await axios.get('/api/nu-of-cars').then((res) => {
              this.drivewayCar2RangeList = res.data.data;
              this.drivewayCar3RangeList = res.data.data;
              this.drivewayCircularRangeList = res.data.data;
          }).catch((err) => {
              console.log(err);
          });
      },
      routeChange() {
          this.$router.push({ name: 'home' });
      }
  },
  mounted() {
      this.getAllServices();
      this.getPropertyStories();
      this.getSquareFoots();
      this.getDrivewayOptions();
      this.getNumberOfCars();
  }
}
</script>

<style scoped>
    #quoteForm::v-deep .house-wash .formulate-input-wrapper,
    #quoteForm::v-deep .roof-clean .roof-clean-content .formulate-input-wrapper,
    #quoteForm::v-deep .property .property-info .formulate-input-wrapper,
    #quoteForm::v-deep .driveway .driveway-info .driveway-info-item .formulate-input-wrapper{
        display: flex;
    }

    #quoteForm::v-deep .roof-clean .roof-clean-content .formulate-input-wrapper {
        margin-right: 3rem;
    }

    #quoteForm::v-deep .roof-clean .roof-clean-content .formulate-input-wrapper .formulate-input-element {
        padding-right: 0.3rem;
    }

    #quoteForm::v-deep .formulate-input-label {
        cursor: pointer;
    }

    #quoteForm::v-deep .house-wash .formulate-input-wrapper label,
    #quoteForm::v-deep .property .property-info .formulate-input-wrapper label,
    #quoteForm::v-deep .driveway .driveway-info .driveway-info-item .formulate-input-wrapper label {
        padding-left: 0.2rem;
    }

    #quoteForm::v-deep .quote-invalid-error {
        margin-top: 0.3rem;
        color: #dc3545;
        font-weight: 300;
    }

    #quoteForm::v-deep .form-control:focus {
        border-color: #495057;
        outline: 0;
        box-shadow: none;
    }

    /* CHECKBOX */

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element input {
        position: absolute;
        left: -999px;
        opacity: 0;
        pointer-events: none;
    }

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-label--after {
      margin-left: 0.5em;
    }

    #quoteForm::v-deep label {
        display: block; 
        line-height: 1;
    }
    
    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element input[type=checkbox]:checked~.formulate-input-element-decorator {
        border-color: #505050;
        background: #505050;
    }

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element-decorator {
        display: block;
        width: 20px;
        height: 20px;
        border: 2px solid #505050;
        position: relative;
    }

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element input[type=checkbox]:checked~.formulate-input-element-decorator:before {
    background-color: #fff;
    -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>');
    mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>');
    }

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element-decorator:before {
    content: "";
    display: block;
    background-size: contain;
    background-position: 100%;
    width: calc(100% - 0.125em);
    height: calc(100% - 0.125em);
    box-sizing: border-box;
    position: absolute;
    top: 0.0625em;
    left: 0.0625em;
    }

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element input[type=radio] ~.formulate-input-element-decorator {
      border: 1px solid #cecece;
      width: 17px;
      height: 17px;
    }

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element input[type=radio]:checked~.formulate-input-element-decorator {
      border-color: #333;
    }

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element[data-type=radio] .formulate-input-element-decorator {
      border-radius: 1em;
    }

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element input[type=radio]:checked~.formulate-input-element-decorator:before {
      background-color: #333;
    }

    #quoteForm::v-deep .formulate-input[data-classification=box] .formulate-input-element[data-type=radio] .formulate-input-element-decorator:before {
        border-radius: 1em;
        width: calc(100% - 0.5em);
        height: calc(100% - 0.5em);
        top: 0.25em;
        left: 0.25em;
    }

    #quoteForm::v-deep .formulate-input-element-decorator {
        cursor: pointer;
    }

</style>